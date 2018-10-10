import swal from 'sweetalert2';

export const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      swal({
        type: 'error',
        text: 'User denied the request for Geolocation.'
      });
      break;
    case error.POSITION_UNAVAILABLE:
      swal({
        type: 'error',
        text: 'Location information is unavailable.'
      });
      break;
    case error.TIMEOUT:
      swal({
        type: 'error',
        text: 'The request to get user location timed out.'
      });
      break;
    case error.UNKNOWN_ERROR:
      swal({
        type: 'error',
        text: 'An unknown error occurred.'
      });
      break;
    default:
      break;
  }
};

export default () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  return swal({
    type: 'error',
    text: 'Geolocation is not supported by this browser'
  });
};
