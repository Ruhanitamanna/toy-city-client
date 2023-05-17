// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBElTwdoGmNkY72i9SuQzQIXhESl4kKUtw",
  authDomain: "toy-city.firebaseapp.com",
  projectId: "toy-city",
  storageBucket: "toy-city.appspot.com",
  messagingSenderId: "1068679162593",
  appId: "1:1068679162593:web:9466f5618ef630793fe5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;