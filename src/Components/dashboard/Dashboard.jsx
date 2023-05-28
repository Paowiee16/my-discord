import React from "react";
import Navbar from "./Navbar";
function dashboard() {
  return (
    <>
      <div className="dark:text-white m-auto flex  h-screen  w-screen ">
        <Navbar />
        <div className="flex justify-center content-center items-center m-auto">
          <h1 className="lg:text-5xl">Welcome to Dashboard!</h1>
        </div>
      </div>
    </>
  );
}

export default dashboard;
