import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2Od4kOFPyiTY5c0md8DeP_0KPVPDRbLg",
    authDomain: "cooking-ninja-site-145ff.firebaseapp.com",
    projectId: "cooking-ninja-site-145ff",
    storageBucket: "cooking-ninja-site-145ff.appspot.com",
    messagingSenderId: "982228025901",
    appId: "1:982228025901:web:49eeb5186134e1cf7faea4"
};

// init firebase
firebase.initializeApp(firebaseConfig) 

const projectFirestore = firebase.firestore();

export { projectFirestore }