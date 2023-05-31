// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ3VYnZgoVKbAJsjMk-4TiVuQ2We7VaRg",
  authDomain: "piwo-lab5-ddea7.firebaseapp.com",
  projectId: "piwo-lab5-ddea7",
  storageBucket: "piwo-lab5-ddea7.appspot.com",
  messagingSenderId: "958734431301",
  appId: "1:958734431301:web:471895b74438535cf69f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);