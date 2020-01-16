import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';
import CreateNewPost from '../components/CreateNewPost';
import * as api from '../api';

test('Test render single post from the X button', () => {
    const title = 'Test title'
    const content = 'Testing contant'
    const id = '123'
    const author = 'Esmeralda'
    const currentPersona = 'Esmeralda'
    const date = '999'

    const wrapper = mount(<SinglePost
        title={title}
        content={content}
        id={id}
        author={author}
        currentPersona={currentPersona}
        date={date}
        onClick={() => { }}
    />);
    expect(wrapper.find('button')).toHaveLength(1);
    wrapper.find("button").simulate("click");
});



test("submit a post", () => {

    const wrapper = mount(<CreateNewPost author="Mila" updatePosts={jest.fn()} />);
    expect(api.fetchAllPosts()).toHaveLength(0);
    wrapper.find("[name='title']").simulate("change", { target: { name: 'title', value: 'test title' } })
    expect(wrapper.state().title).toBe("test title");
    wrapper.find("[name='content']").simulate("change", { target: { name: 'content', value: 'test content' } })
    expect(wrapper.state().content).toBe("test content");
    wrapper.find("[type='submit']").simulate("click");
    expect(wrapper.state().title).toBe("test title");
    expect(wrapper.state().content).toBe("test content");
    wrapper.find('[type="submit"]').simulate("submit");
    expect(api.fetchAllPosts()).toHaveLength(1);

});



