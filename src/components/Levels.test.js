import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from '../enzymeSetup';

import Levels from './Levels';

let wrapper;
let instance;

const mockProps = {
  setLevel: jest.fn(),
  gameLevels: {
    'muggle': { code: 0, label: 'muggle' },
    'wizard': { code: 1, label: 'wizard' },
    'auror': { code: 2, label: 'auror'}
  }
}

beforeEach(() => {
  wrapper = shallow (<Levels setLevel={mockProps.setLevel} gameLevels={mockProps.gameLevels} />);
  instance = wrapper.instance();
})

describe('handleSelect', () => {
  it('should be defined', () => {
    expect(instance.handleSelect).toBeDefined();
  });

  it('notify parent of level selection', () => {
    let mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'muggle' }
    }
    instance.handleSelect(mockEvent);
    expect(mockProps.setLevel).toHaveBeenCalled();
  });
});

describe('render', () => {
  it('should render a list of buttons for level options', () => {
    expect(wrapper.find('button').length).toEqual(3);
  });

  // it('should call handleSelect on button click', () => {
  //   jest.spyOn(instance, 'handleSelect');

  //   wrapper.find('button').at(0).simulate('click', {
  //     target: { value: 'muggle' }
  //   });
    
  //   expect(instance.handleSelect).toHaveBeenCalled();
  // })
});