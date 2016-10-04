import React, { Component } from 'react';
import '../styles/index.css';
import MessageList from './MessageList';
import ChatBar from './ChatBar';
import NavBar from './NavBar';

class App extends Component {
  render() {
    console.log("Rendering <App/>");
    return (
      <div className="app">
      <NavBar />
      <MessageList />
      <ChatBar />
      </div>
    );
  }
}

export default App;
