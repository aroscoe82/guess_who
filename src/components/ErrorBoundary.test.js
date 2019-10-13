import React from 'react'
import { shallow } from '../enzymeSetup';

import ErrorBoundary from './ErrorBoundary'

let wrapper;

it('renders basic component', () => {
    wrapper = shallow(
        <ErrorBoundary></ErrorBoundary>
    );

    expect(wrapper).toMatchSnapshot();
});

it('sets state defaults', () => {
    wrapper = shallow(
        <ErrorBoundary></ErrorBoundary>
    );

    expect(wrapper.state().error).toBe(null);
    expect(wrapper.state().errorInfo).toBe(null);
});

it('should update state with error in componentDidCatch', () => {
    wrapper = shallow(
        <ErrorBoundary><p>Test</p></ErrorBoundary>
    );

    expect(wrapper.state().error).toBe(null);
    expect(wrapper.state().errorInfo).toBe(null);

    wrapper.instance().componentDidCatch('test-error', 'some error info');

    expect(wrapper.state().error).toEqual('test-error');
    expect(wrapper.state().errorInfo).toEqual('some error info');
});

it('should render error message if has error', () => {
    wrapper = shallow(
        <ErrorBoundary><p>Test</p></ErrorBoundary>
    );

    wrapper.instance().componentDidCatch('test-error', 'some error info');
    wrapper.update();
    const comp = wrapper.html();
    expect(comp).toEqual('<div><h2>Oops - Something went wrong.</h2><details style="white-space:pre-wrap">test-error<br/></details></div>')
});

it('should return content if no error', () => {
    wrapper = shallow(
        <ErrorBoundary><p>Test</p></ErrorBoundary>
    );

    const comp = wrapper.html();
    expect(comp).toEqual('<p>Test</p>');
})