// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEAz_n5GVXrKCoSff0OtekOO8L0y4NV1E",
  authDomain: "solo-funds-tracker.firebaseapp.com",
  projectId: "solo-funds-tracker",
  storageBucket: "solo-funds-tracker.appspot.com",
  messagingSenderId: "802474076316",
  appId: "1:802474076316:web:da57b7b0651e081e9ce559"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Create and sign in functions