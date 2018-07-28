// import React, { Component } from 'react';
// import Post from './Post';
// import uuid from 'uuid/v1';
// import { connect } from 'react-redux';
// class PostList extends Component {
//   handleDelete = id => {
//     this.props.dispatch({
//       type: 'DELETE_POST',
//       id: id
//     });
//   };

//   render() {
//     return (
//       <div>
//         {this.props.posts.map(post => (
//           <Post
//             key={post.id}
//             body={post.body}
//             title={post.title}
//             id={post.id}
//             handleDelete={this.handleDelete}
//           />
//         ))}
//       </div>
//     );
//   }
// }
// function mapStateToProps(reduxState) {
//   return {
//     posts: reduxState.posts
//   };
// }
// export default connect(mapStateToProps)(PostList);

import React, { Component } from 'react';
import Post from './Post';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
class PostList extends Component {
  deleteAPost = id => {
    this.props.dispatch({
      type: 'DELETE_POST',
      id: id
    });
  };
  updateAPost = id => {
    this.props.dispatch({
      type: 'EDIT_POST',
      id: id
    });
  };

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            body={post.body}
            title={post.title}
            handleDelete={() => this.deleteAPost(post.id)}
            handleEdit={() => this.updateAPost(post.id)}
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
export default connect(mapStateToProps)(PostList);
