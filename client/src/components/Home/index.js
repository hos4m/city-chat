import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import getLocation, { showError } from '../../../utils/getLocation';
import config from '../../../config';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  async componentDidMount() {
    openSocket(config.websocket.baseURL);

    try {
      const result = await getLocation();
      this.setState({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude
      });
    } catch (error) {
      showError(error);
    }
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <div>
        {longitude
          && longitude && (
            <ul>
              <li>{`Latitude: ${latitude}`}</li>
              <li>{`Longitude: ${longitude}`}</li>
            </ul>
        )}
      </div>
    );
  }
}
