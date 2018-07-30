import React, { Component } from 'react';
import Post from './Post';
import PostEditForm from './PostEditForm';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
class PostList extends Component {
  deleteAPost = id => {
    this.props.dispatch({
      type: 'DELETE_POST',
      id: id
    });
  };

  toggleEditAPost = (id, newValue) => {
    const toggleEditdPosts = this.props.posts.map(post => {
      if (post.id === id) {
        return { ...post, isEditing: newValue };
      }
      return post;
    });
    this.props.dispatch({
      type: 'TOGGLE_EDIT_POST',
      posts: toggleEditdPosts
    });
  };

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          if (post.isEditing === false) {
            return (
              <Post
                key={post.id}
                body={post.body}
                title={post.title}
                handleDelete={() => this.deleteAPost(post.id)}
                toggleEdit={() => this.toggleEditAPost(post.id, true)}
              />
            );
          } else {
            return <PostEditForm id={post.id} key={post.id} />;
          }
        })}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}
export default connect(mapStateToProps)(PostList);
// return (
//   <div>
//     {this.props.posts.map(post => (
//       <Post
//         key={post.id}
//         body={post.body}
//         title={post.title}
//         handleDelete={() => this.deleteAPost(post.id)}
//         handleEdit={() => this.updateAPost(post.id)}
//       />
//     ))}
//   </div>
// );
