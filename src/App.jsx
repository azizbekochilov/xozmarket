import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Karusel from "./components/Karusel";
import Footer from "./components/Footer"
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/footer" element={<Footer/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/kar" element={<Karusel/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />

    </Routes>

  );
}
export default App;
