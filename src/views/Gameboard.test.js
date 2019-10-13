import React from 'react';
import { shallow } from '../enzymeSetup';

import {Link} from 'react-router-dom';

import Gameboard from './Gameboard';
import CountdownTimer from '../components/CountdownTimer';
import Clues from '../components/Clues';

let wrapper;
let instance;
const mockProps = { location: { state: { level: {label: 'muggle', time: 180, guessWho: { name: 'Harry Potter'} } } }}

describe('guessHandler', () => {
  beforeEach(() => {
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(instance.guessHandler).toBeDefined();
  })

  it('should take entry event and check if match game character, if correct end game', () => {
    let mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'Har' }
    }
    instance.guessHandler(mockEvent);
    expect(instance.state.gameOver).toBe(false);

    mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'Harry potter' }
    }
    instance.guessHandler(mockEvent);
    expect(instance.state.gameOver).toBe('You Won!');
  });
});

describe('gameOver', () => {
  beforeEach(() => {
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(instance.gameOver).toBeDefined();
  })

  it('set state to end game with message', () => {
    instance.gameOver('you win');
    expect(instance.state.gameOver).toEqual('you win')
  });
});

describe('componentDidMount', () => {
  beforeEach(() => {
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();
  });

  it('should update state with props', () => {
    expect(wrapper.state().gameInfo).toEqual({"guessWho": { "name": "Harry Potter"}, "label": "muggle", "time": 180})
  });
});

describe('render', () => {
  it('if gameInfo and !gameOver- should render game', () => {
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();

    expect(wrapper.find(<Clues />)).toBeTruthy()
  });

  it('if gameInfo and gameOver - should render game info (won/lost)', () => {
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();

    instance.setState({gameOver: 'You Win'})

    expect(wrapper.find('You Win')).toBeTruthy();
  });

  it('if !gameInfo - should render loading indicator', () => {
    Gameboard.prototype.componentDidMount = () => { };
    wrapper = shallow(<Gameboard {...mockProps} />);
    instance = wrapper.instance();

    expect(wrapper.contains('Loading...')).toBeTruthy();
  });
}); 