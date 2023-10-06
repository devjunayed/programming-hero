// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB54u__zIkjztWZZ_Sm5sLK-mx6AQXsbGc",
  authDomain: "dragon-news-4060f.firebaseapp.com",
  projectId: "dragon-news-4060f",
  storageBucket: "dragon-news-4060f.appspot.com",
  messagingSenderId: "695535341967",
  appId: "1:695535341967:web:7231b3ac561ac9622e7bfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
