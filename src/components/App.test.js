import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<App/>);
  });

  it('should contains comment form', () => {
    expect(wrapper.find('.comment-form').exists()).toBe(true);
  });

  it('should contains comment list', function () {
    expect(wrapper.find('.comment-list').exists()).toBe(true);
  });

  it('should have a updated state after add comment', () => {
    // expect
    wrapper.instance().addComment('Dawcio');
    console.log(wrapper.state('comments')[0]);
    expect(wrapper.state('comments')[0]).toEqual('Dawcio');
  });
});
