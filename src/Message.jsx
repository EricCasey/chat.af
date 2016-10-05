import React, { Component } from 'react';
import Username from './Username';

import '../styles/App.css';
import '../styles/index.css';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (
      <div className="Message">
       <Username UName={this.props.UName}/>
       <span className="message-text" id={this.props.id}>{this.props.text}</span>
       </div>
    );
  }
}

export default Message;
