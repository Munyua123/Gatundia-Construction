import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, []);
  return (
    <div
      style={{
        fontFamily: "Lora, serif",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products product={productData} loading={loading} />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
