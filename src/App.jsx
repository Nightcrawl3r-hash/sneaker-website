import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Sale from "./components/Sale";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Wishlist from "./components/Wishlist";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
