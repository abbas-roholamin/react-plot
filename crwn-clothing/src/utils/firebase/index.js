/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDMl0naK4zXBmBpEpcWoGa4WEixMC4Kdc",
  authDomain: "crwn-cloting-ae50c.firebaseapp.com",
  projectId: "crwn-cloting-ae50c",
  storageBucket: "crwn-cloting-ae50c.appspot.com",
  messagingSenderId: "820219640994",
  appId: "1:820219640994:web:3c097013ef698f1bf82bfb",
  measurementId: "G-DJQR3RMY9H",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export default { auth, SignInWithGooglePopup };
