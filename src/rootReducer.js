const INITIAL_STATE = {
  posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [
        ...state.posts,
        { title: action.post.title, body: action.post.body, id: action.post.id }
      ]
    };
  }
  if (action.type === 'DELETE_POST') {
    const newState = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newState
    };
  }
  if (action.type === 'EDIT_POST') {
    return {
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          post.title = action.title;
          post.body = action.body;
        }
        return post;
      })
    };
  }
  return state;
}
