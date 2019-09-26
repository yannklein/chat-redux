import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from "./message";
import MessageForm from "./message_form";
import { getMessages } from "../actions";

class MessageList extends React.Component {
  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list">
        <h2> Channel #{this.props.selectedChannel}</h2>
        <div>
          <div>
            {this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
          </div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
