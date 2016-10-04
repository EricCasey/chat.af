import React, { Component } from 'react';
import Username from "./Username"

import '../styles/App.css';

class App extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (
      <div className="Message">
       <Username />
       <span className="message-text">This message used to make me hungry. Now it's hardcoded.</span>
       </div>
    );
  }
}

export default App;
