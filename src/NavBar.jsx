import React, { Component } from 'react';

import '../styles/index.css';

class App extends Component {
  render() {
    console.log("Rendering <NavBar/>");
    return (
    <nav className="NavBar">
          <h1>Chat.af</h1>
    </nav>
    );
  }
}

export default App;
