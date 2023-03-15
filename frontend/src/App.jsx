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
import Oforma from "./pages/Oforma";
import Oplata from "./pages/Oplata";
import Dannix from "./pages/Dannix";
import About from "./pages/About";
import Kredit from "./pages/Kredit";
import OrderPage from "./pages/OrderPage";
import Comments from "./components/Comments";
function App() {
  return (
    <Routes>
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/footerIdea" element={<FooterIdea />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/master" element={<Master />} />
      <Route path="/masterdetail/:id" element={<MasterDetail />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/oforma" element={<Oforma />} />
      <Route path="/oplata" element={<Oplata/>} />
      <Route path="/dannix" element={<Dannix/>} />
      <Route path="/kredit" element={<Kredit/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/orderpage" element={<OrderPage/>} />
    </Routes>
  );
}
export default App;