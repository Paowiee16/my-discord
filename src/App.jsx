import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./Components/registration/Registration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
