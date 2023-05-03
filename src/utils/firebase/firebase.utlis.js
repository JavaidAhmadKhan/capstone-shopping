import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPPYgsk7QTVFbbWUoe-_PqwxoEg6AhIzM",
  authDomain: "fashion-app-b294a.firebaseapp.com",
  databaseURL: "https://fashion-app-b294a.firebaseio.com",
  projectId: "fashion-app-b294a",
  storageBucket: "fashion-app-b294a.appspot.com",
  messagingSenderId: "781285323400",
  appId: "1:781285323400:web:8096f8e97b05f3b00ca53d",
  measurementId: "G-N05DR31JZ3",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
