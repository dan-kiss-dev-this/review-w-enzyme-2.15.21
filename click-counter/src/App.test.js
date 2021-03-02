import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// set up enzymes react adapter
Enzyme.configure ({ adapter: new EnzymeAdapter() });

/**
 * js doc comment, setup is used over and over
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  //const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
})

test('renders a button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");

// const wrapper = setup()
// const counterDisplay = wrapper.find("[data-test='counter']");
// expect(counterDisplay.length).toBe(1);
})

test('clicking on button increments counter display', () => {
  //find the button
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  // click the button
  console.log(5353, wrapper.debug())
  button.simulate('click')
  console.log(5555, wrapper.debug())
  //find the display and test the number in the display matches
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("1");
})


