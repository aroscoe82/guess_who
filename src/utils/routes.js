// views
import Dashboard from '../views/Dashboard';
import Gameboard from '../views/Gameboard';

export default[
  {
    path: process.env.PUBLIC_URL + '/',
    exact: true,
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: process.env.PUBLIC_URL + '/level/:code',
    exact: true,
    name: 'Game',
    component: Gameboard
  }
]