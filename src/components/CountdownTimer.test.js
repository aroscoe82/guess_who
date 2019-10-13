import React from 'react';
import ReactDOM from 'react-dom';

import CountdownTimer from './CountdownTimer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountdownTimer />, div);
  ReactDOM.unmountComponentAtNode(div);
});