// connect and setup firebase 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDI9Qc0lNmT9-npaakiU2OSAMVXwD5vHbI",
  authDomain: "fir-class-t3h-3-buoi17.firebaseapp.com",
  projectId: "fir-class-t3h-3-buoi17",
  storageBucket: "fir-class-t3h-3-buoi17.appspot.com",
  messagingSenderId: "912496591136",
  appId: "1:912496591136:web:3f4bb6306cc5a5f5d25745",
  measurementId: "G-6W7WS5CTJK"
};
// back alt + <-

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();

export { auth, googleAuth, facebookAuthProvider }