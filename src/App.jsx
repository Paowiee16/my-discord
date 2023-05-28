import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./Components/registration/Registration";
import Dashboard from "./Components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
