import React from 'react';
import ReactDOM from 'react-dom';

import Gameboard from './Gameboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gameboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('method', () => {
  it('should take entry event and check if match game character, if correct end game', () => {

  });
});

describe('method', () => {
  it('set state to end game', () => {

  });
});

describe('componentDidMount', () => {
  it('should update state with props', () => {

  });
});

describe('render', () => {
  it('if - should render game', () => {

  });

  it('if - should render game info (won/lost)', () => {

  });

  it('if - should render loading indicator', () => {

  });
});