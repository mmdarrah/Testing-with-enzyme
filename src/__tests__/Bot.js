import React from 'react';
import { mount } from 'enzyme';
import Bot from '../components/Bot/Bot';



test('should have an MessageForm', () => {
    const wrapper = mount(<Bot />);
    expect(wrapper.find('MessageForm')).toHaveLength(1);

});
test('should have TypingIndicator', () => {
    const wrapper = mount(<Bot />);
    expect(wrapper.find('TypingIndicator')).toHaveLength(1);
});

test('Test bot', () => {
    const wrapper = mount(<Bot />);
    expect(wrapper.state('typing')).toEqual(false)
    wrapper.find('MessageForm').simulate("submit");
    expect(wrapper.state('typing')).toEqual(true)
});



