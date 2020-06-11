import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Counter from '../Counter/Counter';
import UserView from '../../View/UserView';
import PostsView from '../../View/PostsView';
import HomeView from '../../View/HomeView';


export default function App() {
  return (
    <Router>
      <Link to='/user'>User</Link>
      <Link to='/posts'>Posts</Link>
      <div>      
      <Route path='/' exact component={HomeView} />
      <Route path='/user' exact component={UserView} />
      <Route path='/counter' exact component={Counter} />
      <Route path='/posts' exact component={PostsView} />
    </div>
    </Router>    
    
  );
}
