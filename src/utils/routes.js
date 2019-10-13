// views
import Dashboard from '../views/Dashboard';
import Gameboard from '../views/Gameboard';

export default routes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/level/:code',
    exact: true,
    name: 'Game',
    component: GameBoard
  }
]