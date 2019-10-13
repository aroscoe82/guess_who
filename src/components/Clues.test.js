import React from 'react';
import { shallow } from '../enzymeSetup';

import Clues from './Clues';

let wrapper;
let instance;

const mockProps = {
  time: 60,
  who: {patronus: 'stag', house: 'griffindor'},
  clues: ['patronus', 'house']
}

describe('getClues', () => {
  beforeEach(() => {
    wrapper = shallow (<Clues gameOver={mockProps.gameOver} time={mockProps.time} who={mockProps.who} clues={mockProps.clues} />);
    instance = wrapper.instance();
  });

  it('should take clues object and character info to create a lit of clue objects', () => {
    let clues = instance.getClues(mockProps.clues);

    expect(clues.length).toEqual(2);
    expect(clues[0]).toEqual({id: 0, answer: 'stag', label: 'patronus' })
  });
});

describe('tick', () => {
  beforeEach(() => {
    wrapper = shallow (<Clues gameOver={mockProps.gameOver} time={mockProps.time} who={mockProps.who} clues={mockProps.clues} />);
    instance = wrapper.instance();
  });

  it('it should be defined', () => {
    expect(instance.tick).toBeDefined();
  });

  it('if time remains decrement by 1 second', () => {
    instance.setState({timerRemaining: 10});
    instance.tick();
    expect(instance.state.timerRemaining).toEqual(9);
  });

  it('if time is interval should increment count', () => {
    instance.setState({initialTime: 60, timerRemaining: 51, clueInterval: 10, count: 0});

    expect(instance.state.count).toEqual(0);
    instance.tick();
    
    expect(instance.state.count).toEqual(1);
  });
});

describe('componentDidMount', () => {
  beforeEach(() => {
    wrapper = shallow(<Clues gameOver={mockProps.gameOver} time={mockProps.time} who={mockProps.who} clues={mockProps.clues} />);
    instance = wrapper.instance();

    jest.spyOn(instance, 'getClues');
  });

  it('should determine time interval for clue reveal', () => {
    expect(instance.state.clueInterval).toEqual(30);
  });

  // it('should call method to get clue list', () => {
  //   expect(instance.getClues).toHaveBeenCalled();
  // });

  it('it should update state and set interval', () => {
    expect(instance.state).toEqual({
      initialTime: 60,
      timerRemaining: 60,
      clues:
       [ { id: 0, label: 'patronus', answer: 'stag' },
         { id: 1, label: 'house', answer: 'griffindor' } ],
      count: 0,
      clueInterval: 30
    });
  });
});