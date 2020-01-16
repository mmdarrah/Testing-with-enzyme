import React from 'react';
import { mount } from 'enzyme';
import Button from '../components/Button';


test('Button should change style', () => {
    const children = 'test'
    const wrapper = mount(<Button onClick={() => { }}>{children}</Button>)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').hasClass('bg-indigo-dark hover:bg-indigo-darker')).toBe(true);
    expect(wrapper.find('button').hasClass('bg-red-dark hover:bg-red-darker')).toBe(false);
    const wrapperDanger = mount(<Button onClick={() => { }} danger={true}>{children}</Button>)
    expect(wrapperDanger.find('button').hasClass('bg-indigo-dark hover:bg-indigo-darker')).toBe(false);
    expect(wrapperDanger.find('button').hasClass('bg-red-dark hover:bg-red-darker')).toBe(true);
});