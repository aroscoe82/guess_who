// views
import Dashboard from '../views/Dashboard';
import Gameboard from '../views/Gameboard';

export default[
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    class: 'dashboard',
    component: Dashboard
  },
  {
    path: '/level/:code',
    exact: true,
    name: 'Game',
    class: 'gameboard',
    component: Gameboard
  }
]