import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.props.toggleEdit}>Edit Post</button>
      </div>
    );
  }
}
