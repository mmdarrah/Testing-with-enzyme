import React from 'react';
import { render, mount } from 'enzyme';
import App from '../components/App';
import Posts from '../components/Posts';
import CreateNewPost from '../components/CreateNewPost';
/* import { setPostFromLocalStorage } from '../components/CreateNewPost' */
beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

/* Unit testing */

test('renders the app', () => {
  render(<App />);
});


test('renders the app and check option', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('option')).toHaveLength(3);
});


test('Should rander with Zak as a default user', () => {
  const wrapper = mount(<App />)
  expect(wrapper.state().currentPersona).toBe('Zac')
})



test('Should have a button to talk with a "Human"', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('button')).toHaveLength(1)
  expect(wrapper.text().includes('Talk to a real human')).toBe(true);
  expect(wrapper.text().includes('Return to forum')).toBe(false);
})



test('Should have a select to select a person', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('select')).toHaveLength(1)
})


test('Render posts with a author "Zac"', () => {
  const user = 'Zac';
  render(<Posts currentPersona={user} />)
})


test('render create new post', () => {
  const user = 'Mila';
  const wrapper = mount(<CreateNewPost updatePosts={() => { }} author={user} />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('textarea')).toHaveLength(1);


})

test('User can add new post', () => {
  const user = 'Mila';
  const wrapper = mount(<CreateNewPost updatePosts={() => { }} author={user} />)
  wrapper.setState({ title: 'Test', content: 'testttt' })
  expect(wrapper.text().includes('testttt')).toBe(true)



})
/* test('User can add new post', () => {
  const person = {
    user: 'Mila',
    title: 'test title'
  };
  const wrapper = mount(<CreateNewPost updatePosts={() => { }} author={person.user} />)
  wrapper.find('input').first().simulate('change', { target: { title: 'user', value: person.user } })
  wrapper.find('input').last().simulate('click')
  expect(wrapper.find('div').text('test title')).toBe(true)


}) */


/* test('User can add new post', () => {
  const user = 'Zac';
  const wrapper = mount(<CreateNewPost updatePosts={() => { }} author={user} />)
  expect(wrapper.find('button')).toHaveLength(1);


}) */



/* test('User can add new comment', () => {


})

test('User can delete his own posts', () => {


})

test('User can delete his own comment', () => {


}) */


/* Integration testing */


test("currentPersona in state updates when select an option", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state().currentPersona).toBe("Zac");
  wrapper.find("select").simulate("change", {
    target: { name: "currentPersona", value: "Esmeralda" }
  });
  expect(wrapper.state().currentPersona).toBe("Esmeralda");
  wrapper.find("select").simulate("change", {
    target: { name: "currentPersona", value: "Morgana" }
  });
  expect(wrapper.state().currentPersona).toBe("Morgana");
});



test('Change the user should render <App /> with new user "Mohammed" setState', () => {
  const wrapper = mount(<App />)
  expect(wrapper.state().currentPersona).toBe('Zac')
  wrapper.setState({ currentPersona: 'Mohammed' });
  expect(wrapper.state().currentPersona).toBe('Mohammed')
  wrapper.setState({ currentPersona: 'Mila' });
  expect(wrapper.state().currentPersona).toBe('Mila')
});


test("currentPage in state should updates when button click", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state().currentPage).toBe("home");
  wrapper.find("button").simulate("click");
  expect(wrapper.state().currentPage).toBe("bot");
  wrapper.find("button").simulate("click");
  expect(wrapper.state().currentPage).toBe("home");
});

test('Go to bot page', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('button')).toHaveLength(1)
  expect(wrapper.text().includes('Talk to a real human')).toBe(true);
  expect(wrapper.text().includes('Return to forum')).toBe(false);
  wrapper.setState({ currentPage: 'bot' });
  expect(wrapper.find('button')).toHaveLength(1)
  expect(wrapper.text().includes('Talk to a real human')).toBe(false);
  expect(wrapper.text().includes('Return to forum')).toBe(true);

})





