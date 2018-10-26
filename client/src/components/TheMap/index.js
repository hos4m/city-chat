import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ContextConsumer } from '../AppContext';

export default class TheMap extends Component {
  render() {
    const { latitude, longitude } = this.props;

    return (
      <ContextConsumer>
        {({ socket }) => {
          console.log(socket);
          return (
            <Fragment>
              <div>{latitude}</div>
              <div>{longitude}</div>
            </Fragment>
          );
        }}
      </ContextConsumer>
    );
  }
}

TheMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};
