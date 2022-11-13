// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8wMdMs-hVf1KWIpyPlpEIl4Dty21vv_8",
    authDomain: "sicktest-63a8d.firebaseapp.com",
    projectId: "sicktest-63a8d",
    storageBucket: "sicktest-63a8d.appspot.com",
    messagingSenderId: "538167755333",
    appId: "1:538167755333:web:4d84a2fcd6267b3bb5592c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getFirestore();
export const userref = collection(database, "users")