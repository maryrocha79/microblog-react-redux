import React, { Component } from 'react';
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
      type: 'EDIT_POST',
      post: { ...this.state, id: this.props.id }
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

        <button>Edit Post</button>
      </form>
    );
  }
}

export default connect()(NewPostForm);
