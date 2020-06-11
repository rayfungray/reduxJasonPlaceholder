import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class User extends React.Component {
    
  componentDidMount() {
    this.props.fetchUsers();
  }


  render() {
    return (
        <div>
          User:
          <ol>
            {this.props.users.map((c)=>(          
              <li>{c.name}</li>          
            ))} 
          </ol>                      
        </div>        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {  
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
