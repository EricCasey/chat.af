import React, {Component} from 'react';

const profanityFilter = require('/../node_modules/profanity-filter');
profanityFilter.seed('profanity');
profanityFilter.setReplacementMethod('word');

class ChatBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            NameValue: 'anon',
            name: 'anon',
            MessageValue: '',
            messageType: ''
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.enterPress = this.enterPress.bind(this);
    }

    handleMessageChange(event) {
        this.setState({
            MessageValue: profanityFilter.clean(event.target.value)
        });
    }

    handleNameChange(event) {
        this.setState({
            NameValue: profanityFilter.clean(event.target.value)
        });
    }

    enterPress(event) {
      if (event.key === 'Enter' && this.state.MessageValue === '') { return }
        if (event.key === 'Enter') {
            let newName = this.state.NameValue,
                oldName = this.state.name,
                username = this.state.NameValue,
                messageInABottle = {
                    username: username,
                    content: this.state.MessageValue
                }
            if (newName === '') {
                this.setState({NameValue: 'anon', name: 'anon'})
                newName = 'anon';
                oldName = 'anon';
                messageInABottle = {
                    username: oldName,
                    content: this.state.MessageValue
                }
            }
            if (newName === oldName) {
                this.props.submit(messageInABottle)
                this.setState({MessageValue: ''});
            } else {
                this.setState({name: newName});
                let sysMessage = {
                    username: 'system',
                    content: `${oldName} changed their name to ${newName}`,
                    MessageType: 'systemMessage'
                }
                this.props.submitSysMessage(sysMessage);
                this.props.submit(messageInABottle);
                this.setState({ MessageValue: '', NameValue: newName });
            }
        }
    };

    render() {
        return (
            <div className="ChatBar">
                <footer>
                    <form>
                        <input id="username" type="text" placeholder="anon" value={this.state.NameValue} onChange={this.handleNameChange}/>
                        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.MessageValue} onChange={this.handleMessageChange} onKeyPress={this.enterPress}/>
                    </form>
                </footer>
            </div>
        );
    }
}

export default ChatBar;
