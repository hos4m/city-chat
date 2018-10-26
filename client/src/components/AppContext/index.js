import React, { Component } from 'react';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';
import config from '../../../config';

const Context = React.createContext('CityChatContext');

export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {
    socket: null
  };

  componentWillMount() {
    const socket = openSocket(config.websocket.baseURL);
    this.setState({ socket });
  }

  render() {
    const { children } = this.props;
    const { socket } = this.state;

    return <Context.Provider value={{ socket }}>{children}</Context.Provider>;
  }
}
