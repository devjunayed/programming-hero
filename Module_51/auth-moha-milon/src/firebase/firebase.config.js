// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZuN1MWWUbSKBy5ne0PHIA2Cep24lfQT8",
  authDomain: "devjunayed-auth-moha-milon.firebaseapp.com",
  projectId: "devjunayed-auth-moha-milon",
  storageBucket: "devjunayed-auth-moha-milon.appspot.com",
  messagingSenderId: "426126419282",
  appId: "1:426126419282:web:d7c288de29bc9c7986c68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;