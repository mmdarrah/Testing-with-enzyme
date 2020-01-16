import React from 'react';
import { mount } from 'enzyme';
import SingleComment from '../components/SingleComment';
import CreateNewComment from "../components/CreateNewComment";
import * as api from '../api';




test('Test render single comment from the X button', () => {
    const comment = 'Testing comment'
    const id = '123'
    const author = 'Esmeralda'
    const currentPersona = 'Esmeralda'
    const date = '999'

    const wrapper = mount(<SingleComment
        comment={comment}
        id={id}
        author={author}
        currentPersona={currentPersona}
        date={date}
        onClick={() => { }}
    />);
    expect(wrapper.find('button')).toHaveLength(1);
    wrapper.find("button").simulate("click");

});



test("submit a comment", () => {

    const wrapper = mount(<CreateNewComment author="Mila" postId='1' updateComments={jest.fn()} />);
    expect(api.fetchAllComments()).toHaveLength(0);
    wrapper.find("[name='comment']").simulate("change", { target: { name: 'comment', value: 'test comment' } })
    expect(wrapper.state().comment).toBe("test comment");
    wrapper.find('[type="submit"]').simulate("submit");
    expect(api.fetchAllComments()).toHaveLength(1);
});

