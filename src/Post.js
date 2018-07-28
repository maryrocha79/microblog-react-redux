// import React, { Component } from 'react';

// export default class Post extends Component {
//   handleDelete = () => {
//     this.props.handleDelete(this.props.id);
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.body}</p>
//         <button onClick={this.handleDelete}>Delete</button>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.props.handleEdit}>Edit Post</button>
      </div>
    );
  }
}
