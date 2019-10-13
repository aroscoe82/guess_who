import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('routes', () => {
  it('should mount Dashboard if route /', () => {
  });

  it('should mount gameboard if route /level/:code', () => {
  })
})