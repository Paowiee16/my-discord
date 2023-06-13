import React from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import { auth, googleProvider } from "../../config/firebase";

function dashboard() {
  console.log(auth.currentUser);
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
