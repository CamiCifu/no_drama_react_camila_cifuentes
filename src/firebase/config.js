// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgBESJweDvuzFjTblDa3WKUbv5yKYobH4",
  authDomain: "camicifu-curso-react.firebaseapp.com",
  projectId: "camicifu-curso-react",
  storageBucket: "camicifu-curso-react.appspot.com",
  messagingSenderId: "1033733415862",
  appId: "1:1033733415862:web:0af10afbcf344411cad717",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;
