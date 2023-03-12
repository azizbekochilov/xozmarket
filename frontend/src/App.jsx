import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import FooterIdea from './pages/FooterIdea'
import Products from "./pages/Products";
import Master from "./pages/Master";
import MasterDetail from "./pages/MasterDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/footerIdea" element={<FooterIdea />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/master" element={<Master />} />
      <Route path="/masterdetail/:id" element={<MasterDetail />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
export default App;