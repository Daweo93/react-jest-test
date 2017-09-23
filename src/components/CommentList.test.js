import React from 'react';
import { mount } from "enzyme";
import CommentList from "./CommentList";

describe('CommentList', () => {
  let component;
  const comments = ['Comment one', 'Comment two'];

  beforeEach(() => {
    component = mount(<CommentList comments={comments}/>);
  });

  it('should have correct class name', () => {
    expect(component.find('div').first().hasClass('comment-list')).toBe(true);
  });

  it('should have two LI element', () => {
    expect(component.find('li').length).toBe(2);
  });

  it('should have corect text in LI', () => {
    let li = component.find('li');
    expect(li.at(0).text()).toBe('Comment one');
    expect(li.at(1).text()).toBe('Comment two');
  });
});