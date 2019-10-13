import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";

import ErrorBoundary from './components/ErrorBoundary';

import './scss/App.scss';

function Lost(){
  return <h1 className="text-center color-white py-5">You Seem Lost...</h1>
}

class App extends React.Component {
  constructor(props){
    super(props);

    axios.interceptors.request.use(function (config) {
      const token = '$2a$10$E69VTQagjnPakm/6NHmCU.IFUteVppxlAL137AkvG7yiQ9/LcPzNe'; // should be send in env
      config.params =  {key: token};
      return config;
    });
  }

  render(){
    return (
      <div className="App">
        <ErrorBoundary>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index} 
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            })}
            <Route component={Lost} />
          </Switch>
        </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;