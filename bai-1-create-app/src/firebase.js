// connect and setup firebase 

import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
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

//const analytics = firebase.getAnalytics(firebase.initializeApp(firebaseConfig));
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Get a reference to the database service
 //const database = new firebase.getDatabase(firebase.initializeApp(firebaseConfig));
export { auth, googleAuth, facebookAuthProvider, storage}

export default firebaseApp;