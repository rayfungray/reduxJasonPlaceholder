import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class Posts extends React.Component {
    
  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props.posts) 
  }
  render() {
    return (
        <div>
          Posts
          <ol>
            {this.props.posts.map((c)=>(          
              <li key ={c.id}>{c.body}</li>          
            ))} 
          </ol>                      
        </div>        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = {  
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
