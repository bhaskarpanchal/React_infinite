import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
