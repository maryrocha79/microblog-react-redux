import axios from 'axios';

export function fetchPosts() {
  return async function(dispatch) {
    const response = await axios.get('http://localhost:3000/api/posts');
    return dispatch({
      type: 'GET_POST',
      posts: response.data
    });
  };
}

export function createPost(post) {
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3000/api/posts', post);
    return dispatch({
      type: 'ADD_POST',
      post: post
    });
  };
}

export function deleteAPost(id) {
  return async function(dispatch) {
    const response = await axios.delete(
      `http://localhost:3000/api/posts/${id}`
    );
    return dispatch({
      type: 'DELETE_POST',
      id
    });
  };
}

export function editAPost(id) {
  return async function(dispatch) {
    const response = await axios.patch(`http://localhost:3000/api/posts/${id}`);
    return dispatch({
      type: 'DELETE_POST',
      id
    });
  };
}
