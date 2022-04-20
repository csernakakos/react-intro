import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCEPJQSGgqmGDMiQ-KPeEtVp2VB0D4MWLs",
    authDomain: "thedojosite-7fdde.firebaseapp.com",
    projectId: "thedojosite-7fdde",
    storageBucket: "thedojosite-7fdde.appspot.com",
    messagingSenderId: "308801928925",
    appId: "1:308801928925:web:e0c52d2b29bb872a9be534"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp }