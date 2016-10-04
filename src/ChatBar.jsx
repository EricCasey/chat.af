import React, { Component } from 'react';

import '../styles/App.css';

class App extends Component {
  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <div className="ChatBar">
      <footer>
      <input id="username" type="text" placeholder="Your Name (Optional)" />
      <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
      </div>
    );
  }
}

export default App;
