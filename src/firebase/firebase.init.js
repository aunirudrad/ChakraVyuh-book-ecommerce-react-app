// Import the functions you need from the SDKs you need
// DANGER ~ API token added here!


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj1it6RHzrKJ8e0R2MfmpdowhuaZxGFY0",
  authDomain: "chakravyuh-users.firebaseapp.com",
  projectId: "chakravyuh-users",
  storageBucket: "chakravyuh-users.firebasestorage.app",
  messagingSenderId: "397344897574",
  appId: "1:397344897574:web:4bd573ab0aefb4563784e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);