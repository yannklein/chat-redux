import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postMyMessage } from "../actions";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    console.log(this.props.username);
    this.props.postMyMessage(this.state.value, this.props.username, this.props.selectedChannel);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="my-message" placeholder="Type something cool!" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postMyMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
