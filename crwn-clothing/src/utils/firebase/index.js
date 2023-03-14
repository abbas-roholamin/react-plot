/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
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

const db = getFirestore();
const createUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  const ref = await getDoc(userDocRef);

  if (!ref.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      return await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("An error happend!", error);
    }
  }

  return userDocRef;
};
export default { auth, SignInWithGooglePopup, createUserDocumentFromAuth };
