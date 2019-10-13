import React from 'react';
import { shallow } from './enzymeSetup';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import App from './App';
import Dashboard from './views/Dashboard';
import Gameboard from './views/Gameboard';

let wrapper;
let instance;
let routesMap = {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('routes', () =>  {
  beforeEach(() => {
    wrapper = shallow (<App />);
    instance = wrapper.instance();

    routesMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  it('should mount Dashboard if route /', () => {
    expect(routesMap['/']).toBe(Dashboard);
  });

  it('should mount gameboard if route /level/:code', () => {
    expect(routesMap['/level/:code']).toBe(Gameboard);
  })
})
