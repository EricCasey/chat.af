import React, {Component} from 'react';
import Message from './Message';

import '../styles/index.css';

class MessageList extends Component {
    render() {
        return (
            <div className="messageList">
                {this.props.content.map((result) => (<Message key={result.key} text={result.content} username={result.username}/>))}
            </div>
        );
    }
}

export default MessageList;
