import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Login from "./Login.js";
import Invalid from "./Invalid.js";
import NavBar from "./NavBar.js";
const RouterDemo = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/invalid" element={<Invalid />} />
        
        </Routes>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
};

export default RouterDemo;
