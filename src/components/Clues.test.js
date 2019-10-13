import React from 'react';
import ReactDOM from 'react-dom';

import Clues from './Clues';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clues />, div);
  ReactDOM.unmountComponentAtNode(div);
});