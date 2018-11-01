const FIREBASE = require('firebase');

module.exports = function() {
  if (!FIREBASE.apps.length) {
    try {
      FIREBASE.initializeApp({
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBAE_AUTHDOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET
      });
    } catch (error) {
      console.error(error);
    }
  }
};
