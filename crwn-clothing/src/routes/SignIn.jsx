import { firebase } from "../utils";
  const signIn = async () => {
    const response = await firebase.SignInWithGooglePopup();
    console.log(response);
  };

      <button onClick={signIn}>Sign in</button>
