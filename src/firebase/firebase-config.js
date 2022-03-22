import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD3zHqGDiVhEsQn3D6r6H_nlL-nU_ntY0Y",
    authDomain: "peter-aspiazu.firebaseapp.com",
    projectId: "peter-aspiazu",
    storageBucket: "peter-aspiazu.appspot.com",
    messagingSenderId: "19798945686",
    appId: "1:19798945686:web:6521bb6a4978f68ac877b7"
  
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
  