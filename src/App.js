import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Email from "./Components/Email";
import Preloader from "./Components/Preloader";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Lora, serif",
      }}
    >
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Email />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <SpeedInsights />
          <Analytics />
        </>
      )}
    </div>
  );
}

export default App;
