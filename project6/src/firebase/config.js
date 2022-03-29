import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkv6o_NHCC8hmUvJyvSqb7WRa9XNJGeow",
    authDomain: "mymoney-9b554.firebaseapp.com",
    projectId: "mymoney-9b554",
    storageBucket: "mymoney-9b554.appspot.com",
    messagingSenderId: "823886564446",
    appId: "1:823886564446:web:7961e97d4130370dd1b8cf"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  const timestamp = firebase.firestore.Timestamp;

  export { projectFirestore, projectAuth, timestamp };