import React from 'react';
import { mount } from 'enzyme';
import CommentForm from "./CommentForm";

describe('CommentForm',  () => {
  let component;

  beforeEach(() => {
    component = mount(<CommentForm />);
  });

  it('should have a correct class', () => {
    expect(component.find('div').first().hasClass('comment-form')).toBe(true);
  });

  it('should have a textarea',  () => {
    expect(component.find('textarea').exists()).toBe(true);
  });

  it('should have a button',  () => {
    expect(component.find('button').exists()).toBe(true);
  });

  describe('entering some text', () => {
    let textarea;

    beforeEach(() => {
      component = mount(<CommentForm addComment={() => {}}/>);

      textarea = component.find('textarea');
      textarea.simulate('change', { target: { value: 'new comment'}});
    });

    it('should show text in textarea', () => {
      expect(textarea.node.value).toBe('new comment');
    });

    it('should be empty after submit', () => {

      component.find('form').simulate('submit');
      expect(textarea.node.value).toBe('');
    });
  });
});