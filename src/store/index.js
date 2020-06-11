import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
  posts: [],
};

// takes current app state & action & RETURNS the new state
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - action.payload };
    case 'GET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
