import React from 'react';

export default class Message extends React.Component {
  render() {
    function formatDate(date) {
      let d = new Date(date);
      let month = (d.getMonth() + 1);
      let day = d.getDate();
      let year = d.getFullYear();

      if (month.length < 2) {
        month = `0${month}`;
      }
      if (day.length < 2) {
        day = `0${day}`;
      }

      return [year, month, day].join('-');
    }

    const date = formatDate(this.props.message.created_at);

    return (
      <div className="message">
        <h2>{ this.props.message.author } <em>{ date }</em></h2>
        <p>{ this.props.message.content }</p>
      </div>
    );
  }
}
