import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import data from "../../data";
import "../styles/App.css";
import Cart from "./Cart";
import Content from "./Content";
import Navbar from "./Navbar";
import ProductModal from "./ProductModal";
const App = () => {
  const [content, setContent] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <div id="main">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Content data={content} />} />
        <Route
          path="/productModal/:index"
          element={<ProductModal setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </div>
  );
};

export default App;
