import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCOHcja-1nIIqvkwiGH2-UsYNLRWoeNJ7g",
  authDomain: "myorganizer-da72b.firebaseapp.com",
  databaseURL: "https://myorganizer-da72b.firebaseio.com",
  projectId: "myorganizer-da72b",
  storageBucket: "myorganizer-da72b.appspot.com",
  messagingSenderId: "287324861987",
  appId: "1:287324861987:web:e559df38cb34d93bfba396",
  measurementId: "G-MR3RJTQ0PK",
});

const db = firebaseConfig.firestore();

export default db;
