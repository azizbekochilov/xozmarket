import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Karusel from "./components/Karusel";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import HomeAd from "./components/HomeAd";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"


function App() {
  return (
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/kar" element={<Karusel />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
    </Routes>
  );
}
export default App;
