import React, { Component } from 'react';
import Username from './Username';
import '../styles/index.css';

class Message extends Component {
  render() {
    return (
      <div className="message">
       <Username username={this.props.username}/>
       <span className="message-text" id={this.props.id}>{this.props.text}</span>
       </div>
    );
  }
}

export default Message;
