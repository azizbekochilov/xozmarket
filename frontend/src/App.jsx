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
import About from "./pages/About"
import Dannix from "./pages/Dannix"
import Oplata from "./pages/Oplata"
import Oforma from "./pages/Oforma"
import Kredit from "./pages/Kredit";

function App() {
  return (
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/kar" element={<Karusel />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/dannix" element={<Dannix/>} />
      <Route path="/oplata" element={<Oplata />} />
      <Route path="/oforma" element={<Oforma />} />
      <Route path="/kredit" element={<Kredit/>} />
    </Routes>
  );
}
export default App;
