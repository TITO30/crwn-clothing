import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmaNxJBsMRyU59CCBVofaKXHQPErEMK-o",
  authDomain: "crw-db-658cc.firebaseapp.com",
  projectId: "crw-db-658cc",
  storageBucket: "crw-db-658cc.appspot.com",
  messagingSenderId: "363372304394",
  appId: "1:363372304394:web:180f94a9b6354f3f7227f3",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=() => auth.signInWithPopup(provider)

export default firebase