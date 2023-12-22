import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes,Route } from "react-router-dom";
import Products from "./Components/Products";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/products" element={<Products />} />

    </Routes>
    </>
  );
}

export default App;
