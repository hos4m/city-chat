import swal from 'sweetalert2';

export default () => {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: Infinity
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  return swal({
    type: 'error',
    buttonsStyling: false,
    text: 'Geolocation is not supported by this browser'
  });
};

export const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      swal({
        type: 'error',
        buttonsStyling: false,
        text: 'User denied the request for Geolocation.'
      });
      break;
    case error.POSITION_UNAVAILABLE:
      swal({
        type: 'error',
        buttonsStyling: false,
        text: 'Location information is unavailable.'
      });
      break;
    case error.TIMEOUT:
      swal({
        type: 'error',
        buttonsStyling: false,
        text: 'The request to get user location timed out.'
      });
      break;
    case error.UNKNOWN_ERROR:
      swal({
        type: 'error',
        buttonsStyling: false,
        text: 'An unknown error occurred.'
      });
      break;
    default:
      break;
  }
};
