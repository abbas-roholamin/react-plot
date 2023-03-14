/** @format */

import React from "react";
import { firebase } from "../utils";

function SignIn() {
  const signIn = async () => {
    const { user } = await firebase.SignInWithGooglePopup();
    const doc = await firebase.createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={signIn}>Sign in</button>
    </>
  );
}

export default SignIn;
