import React, { Component } from 'react';
import '../styles/index.css';
import MessageList from './MessageList';
import ChatBar from './ChatBar';
import NavBar from './NavBar';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        currentUser: { name: "Bob" },
        messages: [
          {
            key: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            key: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      },
      isLoading: false,
      myUsername: '',
      socket: new WebSocket("ws://localhost:4000")
    }
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div className="app">
      <NavBar />
      <MessageList key={this.state.data.messages.key} content={this.state.data.messages} userName={this.state.data.messages.username} />
      <ChatBar name={this.state.data.currentUser.name} />
      </div>
    );
  }


  componentDidMount() {
    console.log("componentDidMount <App />");


    this.state.socket.onopen = (event) => {
      console.log("im about to send!");

      this.state.socket.send("Here's some text that the server is urgently awaiting!");

      this.state.socket.onmessage = () => {
        console.log('conneted to server');
      }
  };




    setTimeout( () => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      this.state.data.messages.push({key: 3, username: "Michelle", content: "Anon stole your marbles!"});
      // Update the state of the app component. This will call render()
      this.setState({data: this.state.data})}, 3000);







  }



}

export default App;
