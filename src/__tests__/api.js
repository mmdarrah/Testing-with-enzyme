import * as api from '../api';

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

test('should get user from localStorage', () => {
  const persona = 'Steffe';
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});


describe('Test generateID function', () => {
  test('generateID should return a string', () => {
    const result = api.generateID();
    expect(typeof result).toBe('string');
  });

  test('generateID should return an unique ID', () => {
    const firstId = api.generateID();
    const secondId = api.generateID();
    expect(firstId).not.toBe(secondId);
  });
});

test('createPostObject should return an object', () => {
  const testTitle = 'Test title';
  const testContent = 'Test content';
  const testAuthorName = 'Test Author';
  const result = api.createPostObject(testTitle, testContent, testAuthorName);
  expect(typeof result).toBe('object');
  /* expect(result).toHaveLength(1) */
});


describe('Test fetchAllPosts', () => {
  test('Test fetchAllPosts function', () => {
    const posts = [{}, {}, {}];
    api.storePostObject(posts);
    const result = api.fetchAllPosts();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(3)
    localStorage.clear();
    const result2 = api.fetchAllPosts();
    expect(Array.isArray(result2)).toBeTruthy();
    expect(result2).toHaveLength(0)
  });

  test('Test fetchAllPosts function should get all posts from localStorage', () => {
    const allPosts = [{}, {}, {}];
    api.storePostObject(allPosts);
    expect(api.fetchAllPosts()).toHaveLength(3);
  });
});



test('Test removePost should remove post from localStorage', () => {
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
  api.storePostObject(posts);
  expect(api.fetchAllPosts()).toHaveLength(3);
  api.removePost('3');
  expect(api.fetchAllPosts()).toHaveLength(2);
  api.removePost('2');
  expect(api.fetchAllPosts()).toHaveLength(1);
});

describe('Test fetchAllComments', () => {
  test('Test fetchAllComments function', () => {
    const comments = [{}, {}, {}];
    api.storeCommentObject(comments);
    const result = api.fetchAllComments();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(3)
    localStorage.clear();
    const result2 = api.fetchAllComments();
    expect(Array.isArray(result2)).toBeTruthy();
    expect(result2).toHaveLength(0)
  });

  test('Test fetchAllcomments function should get all comments from localStorage', () => {
    const allcomments = [{}, {}, {}];
    api.storeCommentObject(allcomments);
    expect(api.fetchAllComments()).toHaveLength(3);
  });
});


test('Test createCommentObject should return an object', () => {
  const commentTitle = 'Test comment';
  const commentContent = 'Test content';
  const author = 'Test Author';
  const date = '999';
  const result = api.createPostObject(commentTitle, commentContent, author, date);
  expect(typeof result).toBe('object');
  /* expect(result).toHaveLength(1) */
});


describe('Testing the comment functions storeCommentObject() fetchAllComments() filterComments() removeComment()', () => {

  test('filterComments should filter all comments by post id', () => {
    const comments = [
      {
        comment: 'Comment one',
        id: '1',
        postId: '1',
        author: 'Mohammed',
        date: '123'
      },
      {
        comment: 'Comment two',
        id: '2',
        postId: '1',
        author: 'Maro',
        date: '456'
      },
      {
        comment: 'Comment three',
        id: '3',
        postId: '2',
        author: 'Mila',
        date: '789'
      }
    ];
    api.storeCommentObject(comments);
    expect(api.fetchAllComments()).toHaveLength(3);
    expect(api.filterComments(comments, '1')).toHaveLength(2);
    api.removeComment('1');
    expect(api.fetchAllComments()).toHaveLength(2);
  });
});

describe('fetchCurrentPersona', () => {
  test('fetchCurrentPersona should get user from localStorage', () => {
    const persona = 'Steffe';
    api.storeCurrentPersona(persona);
    expect(api.fetchCurrentPersona()).toMatch(persona);
    localStorage.clear();
    // Zac is the defult user
    expect(api.fetchCurrentPersona()).toMatch('Zac');
  });

  test('fetchCurrentPersona should return a string', () => {
    const persona = 'Steffe';
    api.storeCurrentPersona(persona);
    const result = api.fetchCurrentPersona();
    expect(typeof result).toBe('string');
  });
});





