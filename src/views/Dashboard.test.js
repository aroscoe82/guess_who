import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { shallow } from '../enzymeSetup';

import Dashboard from './Dashboard';
import Levels from '../components/Levels';
import { game } from '../utils/game';

jest.mock('axios');
jest.mock('../utils/game');

let wrapper;
let instance;
const mockHistory = { push: jest.fn() };
const mockGame = {
  setCharacters: jest.fn(),
  getLevels: jest.fn(),
  getLevelDetail: jest.fn().mockReturnValue({code: 0, label: 'muggle', clues: [], time: 180, randomCharacter: () => { return {} } })
}

beforeEach(async() => {
  game.mockImplementation(() => mockGame);
});

describe('state', () =>  {
  it('should initially have loading true', () => {
    Dashboard.prototype.componentDidMount = () => { };
    wrapper = shallow (<Dashboard history={mockHistory} />);
    instance = wrapper.instance();

    expect(instance.state.loading).toBeTruthy();
  });
});

describe('method', () => {
    beforeEach(() => {

    Dashboard.prototype.componentDidMount = () => { };

    wrapper = shallow (<Dashboard history={mockHistory} />);
    instance = wrapper.instance();

    jest.spyOn(instance, 'setGameLevel');
  });

  it('should be defined', () => {
    expect(instance.setGameLevel).toBeDefined();
  });

  it('should get game level detail', () => {
    instance.setGameLevel('muggle');
    expect(mockGame.getLevelDetail).toHaveBeenCalled();
  });

  it('should get random character for game', () => {
    /**********/
  });

  it('should re-direct you to Gameboard', () => {
    instance.setGameLevel('muggle');
    expect(instance.props.history.push).toHaveBeenCalledWith({
      pathname: '/level/0',
      state: { level: {label: 'muggle', clues: [], time: 180, guessWho: {} }}});
  });
});

describe('componentDidMount', () => {
  beforeEach(async() => {
    axios.get.mockImplementation(() => 
        Promise.resolve({ 
            data: {
                "id":"abc111def456"
            }
        })
    );

    wrapper = shallow (<Dashboard history={mockHistory} />);
    instance = wrapper.instance();

    jest.spyOn(axios, 'get');
    jest.spyOn(instance, 'componentDidMount');
  });

  // it('should fetch character listing', async() => {
  //   instance.componentDidMount();
  //   await Promise.resolve()
  //   expect(axios.get).toHaveBeenCalled();
  // });

  // it('should set characters on game', async() => {
  //   instance.componentDidMount();
  //   await Promise.resolve();
  //   expect(instance.game.setCharacters).toHaveBeenCalled();
  // });

  // it('should set loading to false', () => {
  //   wrapper = shallow (<Dashboard history={mockHistory} />);
  //   instance = wrapper.instance();

  //   instance.componentDidMount();
  //   expect(wrapper.state('loading')).toEqual(false);
  // });
});

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('if not loading - should render dashboard with levels component', () => {
    Dashboard.prototype.componentDidMount = () => { };
    wrapper = shallow (<Dashboard history={mockHistory} />);
    instance = wrapper.instance();
    instance.setState({loading: false})

    expect(wrapper.find(<Levels />)).toBeTruthy()
  });

  it('if loading - should render loading indicator', () => {
    Dashboard.prototype.componentDidMount = () => { };
    wrapper = shallow (<Dashboard history={mockHistory} />);

    expect(wrapper.contains('Loading...')).toBeTruthy();
  });
});