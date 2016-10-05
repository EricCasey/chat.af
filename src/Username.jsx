import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/index.css';

class App extends Component {
  render() {
    console.log("Rendering <Username/>");
    return (
      <div className="Username" id={this.props.UName}>
      {this.props.UName}
      </div>
    );
  }
}

export default App;
