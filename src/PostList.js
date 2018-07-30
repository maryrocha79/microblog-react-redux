import React, { Component } from 'react';
import Post from './Post';
import PostEditForm from './PostEditForm';
// import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { fetchPosts, deleteAPost } from './actionCreator';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete = id => {
    this.props.deleteAPost(id);
  };

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            body={post.body}
            title={post.title}
            handleDelete={() => this.handleDelete(post.id)}
            toggleEdit={() => this.toggleEditAPost(post.id, true)}
          />
        ))}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}
export default connect(
  mapStateToProps,
  { fetchPosts, deleteAPost }
)(PostList);
