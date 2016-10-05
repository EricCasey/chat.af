import React, { Component } from 'react';

import '../styles/App.css';

class ChatBar extends Component {

  constructor(props) {
    super(props)
    this.state = { NameValue: '', name:'', MessageValue: ''};
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleMessageChange(event) {
      console.log(`Setting Message State to: ${event.target.value}`)
      this.setState({ MessageValue: event.target.value });
  }

  handleNameChange(event) {
      console.log(`Setting Name State to: ${event.target.value}`)
      this.setState({ NameValue: event.target.value });
  }

  submitMessage(){
    console.log('123OMG');
  };

  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <div className="ChatBar">
      <footer>
      <form onSubmit={this.submitMessage}>
      <input id="username" type="text" placeholder="Your Name (Optional)" value={this.state.NameValue} onChange={this.handleNameChange} />
      <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.MessageValue} onChange={this.handleMessageChange} />
      </form>
      </footer>
      </div>
    );
  }



}

export default ChatBar;

// value={this.props.name}
