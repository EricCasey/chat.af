import React, { Component } from 'react';
import App from './App';

import '../styles/App.css';

class ChatBar extends Component {

  constructor(props) {
    super(props)
    this.state = { NameValue: '', name:'', MessageValue: ''};
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.enterPress = this.enterPress.bind(this);
    // this.submit = this.submit.bind(this);
  }


  handleMessageChange(event) {
      console.log(`Setting Message State to: ${event.target.value}`)
      this.setState({ MessageValue: event.target.value });
  }


  handleNameChange(event) {
      console.log(`Setting Name State to: ${event.target.value}`)
      this.setState({ NameValue: event.target.value });
  }


  enterPress(event){
    if (event.key === 'Enter') {
      var messageInABottle = {
        username: this.state.NameValue,
        content: this.state.MessageValue
      }
      console.log(messageInABottle)
      this.props.submit(messageInABottle)
    }
  };


  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <div className="ChatBar">
      <footer>
      <form>
      <input id="username" type="text" placeholder="Your Name (Optional)" value={this.state.NameValue} onChange={this.handleNameChange} />
      <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.MessageValue} onChange={this.handleMessageChange}
      onKeyPress={this.enterPress} />
      </form>
      </footer>
      </div>
    );
  }



}

export default ChatBar;
