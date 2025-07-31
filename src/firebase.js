// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYok8ROblai6_qnaPeubYkPA0R9LEpLSc",
  authDomain: "ghautham-portfolio.firebaseapp.com",
  projectId: "ghautham-portfolio",
  storageBucket: "ghautham-portfolio.firebasestorage.app",
  messagingSenderId: "188669986634",
  appId: "1:188669986634:web:477d1c8e2e64ebb063e3b3",
  measurementId: "G-3XS1ZZ7V5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 