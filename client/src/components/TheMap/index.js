import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { ContextConsumer } from '../AppContext';
import events from '../../../../events';

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
    },
    isCreateRoomFieldsVisible: false,
    newRoomData: {
      name: '',
      description: ''
    }
  };

  createRoom(e, socket) {
    e.preventDefault();
    const { mapParams, newRoomData } = this.state;
    socket.emit(events.CREATE_ROOM, {
      name: newRoomData.name,
      description: newRoomData.description,
      latitude: mapParams.latitude,
      longitude: mapParams.longitude
    });
  }

  render() {
    const { mapParams, isCreateRoomFieldsVisible, newRoomData } = this.state;
    return (
      <ContextConsumer>
        {({ socket }) => (
          <section className="mapContainer">
            <ReactMapGL
              {...mapParams}
              onViewportChange={data => this.setState({ mapParams: data })}
              mapboxApiAccessToken={process.env.MAPBOX_API_ACCESSTOKEN}
            >
              <Marker latitude={mapParams.latitude} longitude={mapParams.longitude}>
                <FontAwesomeIcon icon={faMapMarker} size="2x" className="mapContainer__marker" />
              </Marker>
              <Popup
                latitude={mapParams.latitude}
                longitude={mapParams.longitude}
                closeButton
                closeOnClick
                anchor="top"
                offsetLeft={12}
                offsetTop={33}
              >
                <div className="mapContainer__create-room">
                  <p>
                    It seems like there is no chat rooms around you.
                    <br />
                    Go ahead and create a new one!
                  </p>

                  {!isCreateRoomFieldsVisible && (
                    <button
                      type="button"
                      className="button button-outline no-margin"
                      onClick={() => this.setState({ isCreateRoomFieldsVisible: true })}
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                  )}

                  {isCreateRoomFieldsVisible && (
                    <form className="no-margin" onSubmit={e => this.createRoom(e, socket)}>
                      <input
                        type="text"
                        placeholder="Chat room name"
                        defaultValue={newRoomData.name}
                        onChange={e => this.setState({
                          newRoomData: { ...newRoomData, name: e.target.value }
                        })
                        }
                      />
                      <textarea
                        placeholder="Chat room description"
                        defaultValue={newRoomData.description}
                        onChange={e => this.setState({
                          newRoomData: { ...newRoomData, description: e.target.value }
                        })
                        }
                      />
                      <input type="submit" value="Create Room" />
                    </form>
                  )}
                </div>
              </Popup>
            </ReactMapGL>
          </section>
        )}
      </ContextConsumer>
    );
  }
}
