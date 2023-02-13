import React from "react";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Karusel from "./components/Karusel";
import Footer from "./components/Footer"
function App() {
  return (
    <Routes>
      <Route path="/footer" element={<Footer/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/kar" element={<Karusel/>}/>
      {/* <Route path="/" element={<Home/>} /> */}
    </Routes>

  );
}
export default App;
