import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2kNPMBmuihEMYHRi6czmlFwOROXqiMZk",
  authDomain: "fb-clone-6e6ea.firebaseapp.com",
  databaseURL: "https://fb-clone-6e6ea.firebaseio.com",
  projectId: "fb-clone-6e6ea",
  storageBucket: "fb-clone-6e6ea.appspot.com",
  messagingSenderId: "303400920751",
  appId: "1:303400920751:web:8d616d96917040da13165a",
  measurementId: "G-6D18XRNGEE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
