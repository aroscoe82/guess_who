import React from 'react';
import ReactDOM from 'react-dom';

import Clues from './Clues';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clues />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('method', () => {
  it('should take clues object and character info to create a lit of clue objects', () => {

  });
});

describe('tick', () => {
  it('if time remains decrement by 1 second', () => {

  });

  it('if time does NOT remain - cancel timer and notify parent', () => {

  });
});

describe('componentDidMount', () => {
  it('should set time remaining on state and set timer call on interval', () => {

  });
});