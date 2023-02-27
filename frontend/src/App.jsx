import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import FooterIdea from './pages/FooterIdea'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/footerIdea" element={<FooterIdea />} />
    </Routes>
  );
}
export default App;
