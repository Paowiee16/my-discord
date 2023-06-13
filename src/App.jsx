import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./Components/registration/Registration";
import Dashboard from "./Components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="logout" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      {user ? <Navigate to="/Dashboard" /> : <Navigate to="/Login" />}
    </>
  );
}

export default App;
