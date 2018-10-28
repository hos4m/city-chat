import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { ContextConsumer } from '../AppContext';

export default class TheMap extends Component {
  static propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  state = {
    mapParams: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: 12
    }
  };

  render() {
    const { mapParams } = this.state;

    return (
      <ContextConsumer>
        {() => (
          <section className="mapContainer">
            <ReactMapGL
              {...mapParams}
              onViewportChange={data => this.setState({ mapParams: data })}
              mapboxApiAccessToken={process.env.MAPBOX_API_ACCESSTOKEN}
            >
              <Marker latitude={mapParams.latitude} longitude={mapParams.longitude}>
                <FontAwesomeIcon icon={faMapMarker} size="2x" className="mapContainer__marker" />
              </Marker>
            </ReactMapGL>
          </section>
        )}
      </ContextConsumer>
    );
  }
}
