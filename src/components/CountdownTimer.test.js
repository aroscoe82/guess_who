import React from 'react';
import ReactDOM from 'react-dom';

import CountdownTimer from './CountdownTimer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountdownTimer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('tick', () => {
  it('if time remains decrement by 1 second', () => {

  });

  it('if time remains check to see if next clue should be shown', () => {

  });

  it('if time does NOT remain - cancel timer', () => {

  });
});

describe('componentDidMount', () => {
  it('should determine time interval for clue reveal', () => {

  });

  it('should call method to get clue list', () => {

  });

  it('it should update state and set interval', () => {

  });
});

describe('componentWillUnMount', () => {
  it('should cancel interval', () => {

  });
});

describe('render', () => {
  it('should render a list of clues', () => {

  });

  it('on initial should have 1 clue', () => {

  });

  it('on interval should show another clue', () => {

  });
});