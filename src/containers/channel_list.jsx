import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setChannel } from "../actions";
import { getMessages } from "../actions";

class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.getMessages(nextProps.selectedChannel);
    }
  }

  changeChannel = (event) => {
    this.props.setChannel(event.target.innerText.slice(1));
  }

  render() {
    return (
      <div className="channel-list">
        <ul>
          {this.props.channels.map(channel => <li><a href="#" onClick={this.changeChannel} >#{channel}</a></li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannel, getMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
