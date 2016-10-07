import React from 'react';
import '../styles/index.css';
import MessageList from './MessageList';
import ChatBar from './ChatBar';
import NavBar from './NavBar';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        currentUser: {
          name: "anon"
        },
        messages: []
      },
      isLoading: false,
      myUsername: '',
      socket: new WebSocket("ws://localhost:4000"),
      userCount: 1
    }
    this.submit = this.submit.bind(this);
    this.submitSysMessage = this.submitSysMessage.bind(this);
  };

  submit(m) {
    this.state.socket.send(JSON.stringify(m));
  };

  submitSysMessage(sM) {
  this.state.socket.send(JSON.stringify(sM))
};

  render() {
    console.log("Rendering <App/>");
    return (
      <div className="app" >
      <NavBar userCount={ this.state.userCount } / >
      <MessageList key={ this.state.data.messages.key }
      content={ this.state.data.messages }
      username={ this.state.data.messages.username } />
      <ChatBar name={ this.state.data.currentUser.name }
      submit={ this.submit } submitSysMessage={this.submitSysMessage} />
      </div>
    );
  };

  componentDidMount() {
    this.state.socket.onopen = (event) => {
      this.state.socket.onmessage = (event) => {
        if (!isNaN(event.data)) {
          this.setState({userCount : event.data})
        } else {
        let unParsed=event.data
        let parsed=JSON.parse(unParsed);
        let username=parsed.username;
        let content=parsed.content;
        let key=parsed.id;
        if( username === 'system' ) {
          this.state.data.messages.push({
            key: key,
            content: content
          })
          this.setState({
            data: this.state.data
          })
        } else {
        this.state.data.messages.push({
          key: key,
          username: username,
          content: content
        })
        this.setState({
          data: this.state.data
        })
        }
}
      }
    };
  }
}

export default App;
