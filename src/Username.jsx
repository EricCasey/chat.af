import React, { Component } from 'react';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="username" id={this.props.username}>
      {this.props.username}
      </div>
    );
  }
}

export default App;
