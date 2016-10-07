import React, { Component } from 'react';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
        <nav className="navBar">
          <h1>Chat.af&nbsp;-->&nbsp;<i>watch your mouth<p id="exclam">!</p></i></h1>
          <div className="clientCount" >{this.props.userCount} Online</div>
    </nav>
    );
  }
}

export default App;
