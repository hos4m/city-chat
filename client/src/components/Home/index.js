import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import TheMap from '../TheMap';
import Spinner from '../shared/Spinner';
import getLocation, { showError } from '../../../utils/getLocation';
import config from '../../../config';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      latitude: null,
      longitude: null
    };
  }

  async componentDidMount() {
    openSocket(config.websocket.baseURL);
    try {
      this.setState({ isLoading: true });
      const result = await getLocation();
      this.setState({
        isLoading: false,
        latitude: result.coords ? result.coords.latitude : null,
        longitude: result.coords ? result.coords.longitude : null
      });
    } catch (error) {
      this.setState({ isLoading: false });
      showError(error);
    }
  }

  render() {
    const { isLoading, latitude, longitude } = this.state;

    return (
      <div>
        {isLoading && <Spinner />}
        {longitude && longitude && <TheMap latitude={latitude} longitude={longitude} />}
      </div>
    );
  }
}
