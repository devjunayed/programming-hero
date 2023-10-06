// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulNM9Ia8tPU65PZOPR-CIehmyl_jU-Ks",
  authDomain: "devjunayed-simple-firebase.firebaseapp.com",
  projectId: "devjunayed-simple-firebase",
  storageBucket: "devjunayed-simple-firebase.appspot.com",
  messagingSenderId: "777412043285",
  appId: "1:777412043285:web:b602c95194038fcb1f641c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;