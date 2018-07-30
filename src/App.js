import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import TitleList from './TitleList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <NewPostForm />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <PostList />
          </div>
          <div className="col-6">
            <TitleList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
