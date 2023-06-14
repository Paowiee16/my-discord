import React from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import { Navigate } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function dashboard() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  console.log(auth.currentUser);
  {
    user ? <Navigate to="/Dashboard" /> : <Navigate to="/Login" />;
  }
  return (
    <>
      <div className="dark:text-white m-auto flex  h-screen  w-screen ">
        <Navbar />
        <Chat />
      </div>
    </>
  );
}

export default dashboard;
