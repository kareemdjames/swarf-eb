import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyArZ8Nw-wBip7a2Lgszu9QoK3OEOw5iECc",
  authDomain: "swarf-eb.firebaseapp.com",
  databaseURL: "https://swarf-eb.firebaseio.com",
  projectId: "swarf-eb",
  storageBucket: "swarf-eb.appspot.com",
  messagingSenderId: "946602163393"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();