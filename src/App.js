import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Hiring from "./Components/Hiring";
import Contact from "./Components/Contact";
import { useState, useEffect } from "react";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [productData, setProductData] = useState([]);
  const [contactsData, setContactData] = useState({
    firstname: "",
    email: "",
    phonenumbers: "",
    reason: "",
    descriptions: "",
  });

  const handleSelectChange = (e) => {
    setContactData({
      ...contactsData,
      [e.target.id]: e.target.value,
    });
  };

  // const handleToggle = () => {
  //   setDarkMode(!darkMode);
  // };

  // Define the class name based on the toggle state
  // const containerClassName = "container" + (darkMode ? " dark-mode" : "");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactsData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setContactData({
      firstname: "",
      email: "",
      phonenumbers: "",
      reason: "",
      descriptions: "",
    });
  }

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div
    style={{
      backgroundColor: "black",
      color: "white",
      fontFamily: 'Lora, serif'
    }}
    >
      {/* <div className={containerClassName}> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products product={productData} />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route
          path="/contacts"
          element={
            <Contact
              firstname={contactsData.firstname}
              email={contactsData.email}
              phonenumbers={contactsData.phonenumbers}
              reason={contactsData.reason}
              descriptions={contactsData.descriptions}
              handlesubmit={handleSubmit}
              handlechange={handleSelectChange}
            />
          }
        />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
