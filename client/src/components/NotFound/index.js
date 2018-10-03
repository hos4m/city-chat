import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import config from '../../../config';

export default class NotFound extends Component {
  componentDidMount() {
    openSocket(config.websocket.baseURL);
  }

  render() {
    return (
      <div>
        <h1>Not Found.</h1>
      </div>
    );
  }
}
