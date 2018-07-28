import React, { Component } from 'react';
import { connect } from 'react-redux';

class TitleList extends Component {
  render() {
    const listTitle = this.props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ));
    return <ul>{listTitle}</ul>;
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}
export default connect(mapStateToProps)(TitleList);
