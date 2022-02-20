// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDlOS0_7P6DV_9NQLPD4M5CpZhAhD-x-k",
    authDomain: "slack-clone-5333d.firebaseapp.com",
    projectId: "slack-clone-5333d",
    storageBucket: "slack-clone-5333d.appspot.com",
    messagingSenderId: "986345633911",
    appId: "1:986345633911:web:333e00559254eb1b142e72",
    measurementId: "G-RD2P9TH70W"
  };


  //connect frontend  to backend
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // getting access to database
  const db = firebaseApp.firestore();

  //basically preparing the authentication module and also a provider and /what you need to do to get google services
  const auth = firebaseApp.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;