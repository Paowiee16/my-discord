// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf25odcK2-Zi_rgh0hWe2Q_NUzQAiQ5uw",
  authDomain: "mydiscord-e1532.firebaseapp.com",
  projectId: "mydiscord-e1532",
  storageBucket: "mydiscord-e1532.appspot.com",
  messagingSenderId: "54093296807",
  appId: "1:54093296807:web:e960ab0780e65434b7d782",
  measurementId: "G-YSYTMDCM11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
