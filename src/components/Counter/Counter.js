import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, fetchPosts } from '../../actions';

class Counter extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props.fetchPosts());
  }
  render() {
    return (
      <div> 
        <h3>Post: {this.props.posts.length}</h3>       
        <h3>{this.props.count}</h3>
        <button onClick={() => this.props.increment(1)}>Increment</button>
        <button onClick={() => this.props.decrement(1)}>Decrement</button>
        <button onClick={() => this.props.increment(5)}>Increment 5</button>
        <button onClick={() => this.props.decrement(5)}>Decrement 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
