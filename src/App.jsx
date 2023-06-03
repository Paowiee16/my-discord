import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./Components/registration/Registration";
import Dashboard from "./Components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
function App() {
  const auth = getAuth();

  console.log(auth.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="logout" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      {auth.currentUser} ?
      <Navigate to="/Dashboard" /> :
      <Navigate to="/Login" />
    </>
  );
}

export default App;
