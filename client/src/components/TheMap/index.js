import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap, withScriptjs, GoogleMap, Marker
} from 'react-google-maps';

class TheMap extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <Fragment>
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: latitude, lng: longitude }} />
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Fragment>
    );
  }
}

TheMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    containerElement: <div className="mapContainer" />,
    loadingElement: <div className="mapContainer__loading" />,
    mapElement: <div className="mapContainer__content" />
  }),
  withScriptjs,
  withGoogleMap
)(TheMap);
