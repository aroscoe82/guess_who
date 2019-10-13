import React from 'react';
import { shallow } from '../enzymeSetup';

import CountdownTimer from './CountdownTimer';

let wrapper;
let instance;

const mockProps = {
  gameOver: jest.fn(),
  time: 60
}

beforeEach(() => {
  wrapper = shallow (<CountdownTimer gameOver={mockProps.gameOver} time={mockProps.time} />);
  instance = wrapper.instance();
});

describe('tick', () => {
  it('it should be defined', () => {
    expect(instance.tick).toBeDefined();
  });

  it('if time remains decrement by 1 second', () => {
    instance.setState({secondsRemaining: 10});
    instance.tick();
    expect(instance.state.secondsRemaining).toEqual(9);
  });

  it('if time does NOT remain - cancel timer', () => {
    instance.setState({secondsRemaining: 0});
    instance.tick();
    expect(mockProps.gameOver).toHaveBeenCalled();
  });
});

describe('componentDidMount', () => {
  it('set secondsRemaining on state', () => {
    expect(instance.state.secondsRemaining).toEqual(60);
  });

  it('it should set timer on interval', () => {
    expect(instance.timer).toBeDefined();
  });
});

// describe('componentWillUnMount', () => {
//   it('should cancel interval', () => {

//   });
// });

describe('render', () => {
  it('should render time remaining message', () => {
    instance.setState({secondsRemaining: 10});
    expect(wrapper.contains(<span>Time Remaining: 10</span>)).toBeTruthy();
  });
});