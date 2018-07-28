import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';

class NewPostForm extends Component {
  state = {
    title: '',
    body: ''
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  gatherInput = e => {
    e.preventDefault();
    this.props.dispatch({
      type: 'ADD_POST',
      post: { ...this.state, id: uuid() }
    });
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.gatherInput}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="body">Body</label>

        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />

        <button>Add Post</button>
      </form>
    );
  }
}

export default connect()(NewPostForm);
