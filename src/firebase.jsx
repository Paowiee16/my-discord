// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf25odcK2-Zi_rgh0hWe2Q_NUzQAiQ5uw",
  authDomain: "mydiscord-e1532.firebaseapp.com",
  projectId: "mydiscord-e1532",
  storageBucket: "mydiscord-e1532.appspot.com",
  messagingSenderId: "54093296807",
  appId: "1:54093296807:web:e960ab0780e65434b7d782",
  measurementId: "G-YSYTMDCM11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
