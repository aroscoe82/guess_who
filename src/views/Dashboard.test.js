import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { shallow } from '../enzymeSetup';

import Dashboard from './Dashboard';
import { game } from '../utils/game';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('method', () => {
  it('should set game level', () => {

  });

  it('should get random character for game', () => {

  });

  it('should re-direct you to Gameboard', () => {

  });
});

describe('componentDidMount', () => {
  it('should fetch character listing', () => {

  });

  it('should set characters on game', () => {

  });

  it('should set loading to false', () => {

  });
});

describe('render', () => {
  it('if not loading - should render dashboard', () => {

  });

  it('if loading - should render loading indicator', () => {

  });
});
