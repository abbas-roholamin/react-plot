/** @format */

import React from "react";
import { firebase } from "../utils";

function SignIn() {
  const signIn = async () => {
    const response = await firebase.SignInWithGooglePopup();
    console.log(response);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={signIn}>Sign in</button>
    </>
  );
}

export default SignIn;
