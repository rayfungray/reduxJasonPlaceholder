import axios from 'axios';

export function increment(amt) {
  return {
    type: 'INCREMENT_COUNT',
    payload: amt,
  };
}

export function decrement(amt) {
  return {
    type: 'DECREMENT_COUNT',
    payload: amt,
  };
}

export function fetchPosts() {
  return async function (dispatch) {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch(getPosts(posts));
  };
}

export function getPosts(posts) {
  return {
    type: 'GET_POSTS',
    payload: posts,
  };
}
//reducer
export function fetchUsers(){
  return async function (dispatch){
    const {data: users} = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(getUsers(users));
  }
}

//action 
export function getUsers(users){
  return{
    type: 'GET_USERS',
    payload: users
  }
}
