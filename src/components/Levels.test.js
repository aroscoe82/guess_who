import React from 'react';
import ReactDOM from 'react-dom';

import Levels from './Levels';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Levels />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('method', () => {
  it('notify parent of level selection', () => {

  });
});

describe('render', () => {
  it('should render a list of buttons for level options', () => {

  });
});