// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-f99cb.firebaseapp.com",
  projectId: "mern-blog-f99cb",
  storageBucket: "mern-blog-f99cb.appspot.com",
  messagingSenderId: "210769921560",
  appId: "1:210769921560:web:5bcf13ed5f4639ca60e56d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);