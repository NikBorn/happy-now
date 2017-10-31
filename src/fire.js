import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyD8xi6mRJzp-pYyy6aCHbdQpF6dsRgOjoQ",
  authDomain: "happy-now.firebaseapp.com",
  databaseURL: "https://happy-now.firebaseio.com",
  projectId: "happy-now",
  storageBucket: "happy-now.appspot.com",
  messagingSenderId: "1051124134103"
};
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;