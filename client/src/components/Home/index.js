import React, { Component, Fragment } from 'react';

import { ContextProvider } from '../AppContext';
import TheMap from '../TheMap';
import Spinner from '../shared/Spinner';
import getLocation, { showError } from '../../../utils/getLocation';

export default class Home extends Component {
  state = {
    isLoading: false,
    latitude: null,
    longitude: null
  };

  async componentDidMount() {
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
      <ContextProvider>
        <Fragment>
          {isLoading && <Spinner />}
          {longitude && longitude && <TheMap latitude={latitude} longitude={longitude} />}
        </Fragment>
      </ContextProvider>
    );
  }
}
