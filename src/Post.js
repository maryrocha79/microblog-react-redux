import React, { Component } from 'react';
import PostEditForm from './PostEditForm';

import { connect } from 'react-redux';

class Post extends Component {
  state = {
    isEditting: false
  };

  toggleEditAPost = () => {
    this.setState({ isEditting: !this.state.isEditting });
  };

  render() {
    if (this.state.isEditting === false) {
      return (
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.toggleEditAPost}>Edit Post</button>
        </div>
      );
    } else {
      return <PostEditForm id={this.props.id} key={this.props.id} />;
    }
  }
}
function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}

export default connect(mapStateToProps)(Post);
// return (
//   <div>
//     <h3>{this.props.title}</h3>
//     <p>{this.props.body}</p>
//     <button onClick={this.props.handleDelete}>Delete</button>
//     <button onClick={this.props.toggleEdit}>Edit Post</button>
//   </div>
// );
