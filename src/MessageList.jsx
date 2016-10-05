import React, { Component } from 'react';
import Message from './Message';

import '../styles/App.css';
import '../styles/index.css';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div className="MessageList" >
        {this.props.content.map((result) => (
          <Message key={result.key} text={result.content} UName={result.username}/>
             ))}
      </div>
    );
  }
}

export default MessageList;
