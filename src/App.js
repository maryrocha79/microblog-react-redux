import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import TitleList from './TitleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
        <NewPostForm />
        <TitleList />
      </div>
    );
  }
}

export default App;
