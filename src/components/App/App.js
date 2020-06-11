import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Counter from '../Counter/Counter';
import UserView from '../../View/UserView';


export default function App() {
  return (
    <Router>
      <div>
      <Route path='/user' exact component={UserView} />
      <Route path='/counter' exact component={Counter} />
    </div>
    </Router>    
    
  );
}
