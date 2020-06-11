import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers} from '../actions';

class User extends React.Component {
    
  componentDidMount() {
    this.props.fetchUsers();  
    
    
  }
  render() {
    return (
        <div>
             {console.log(this.props.users)}
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

const mapDispatchToProps = {  
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
