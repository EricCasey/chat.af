import React, { Component } from 'react';
import Message from './Message';

import '../styles/App.css';

class App extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div className="MessageList">
      <Message/>
      </div>
    );
  }
}

export default App;
