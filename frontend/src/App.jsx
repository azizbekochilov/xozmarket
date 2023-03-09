import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import FooterIdea from './pages/FooterIdea'
import Products from "./pages/Products";
import Master from "./components/Master";
import MasterDetail from "./components/MasterDetail";
import Klub from "./components/Klub";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/footerIdea" element={<FooterIdea />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/master" element={<Master />} />
      <Route path="/masterdetail" element={<MasterDetail />} />
    </Routes>
  );
}
export default App;
