import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAvUK0-4vwx6cDq1n0-XzeL9orgFPm-VVs",
  authDomain: "newsapp-6825f.firebaseapp.com",
  databaseURL: "https://newsapp-6825f.firebaseio.com",
  projectId: "newsapp-6825f",
  storageBucket: "newsapp-6825f.appspot.com",
  messagingSenderId: "284866442790",
  appId: "1:284866442790:web:c9af7ccc7d822b54ac18e7"
};

const fire = firebase.initializeApp(config);
export default fire;