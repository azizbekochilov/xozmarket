import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Karusel from "./components/Karusel";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
    </Routes>
  );
}
export default App;
