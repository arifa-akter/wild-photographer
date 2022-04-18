// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dYPfpNwqGAElaycz8fDqNWqCneFf7zk",
  authDomain: "wild-photographer-1fd87.firebaseapp.com",
  projectId: "wild-photographer-1fd87",
  storageBucket: "wild-photographer-1fd87.appspot.com",
  messagingSenderId: "688248263750",
  appId: "1:688248263750:web:e4504c1a71477ae5f02647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth