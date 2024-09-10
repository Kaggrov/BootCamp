import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Day4/Home.js";
import About from "../Day4/About.js";
import Contact from "../Day4/Contact.js";
import NavBar from "./NavBar.js";
import ParamsDemo from "./ParamsDemo.js";
import ControlledDemo from "./ControlledDemo.js";

const RouterDemo = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/params/:n" element={<ParamsDemo />} />

        </Routes>
      </BrowserRouter>
      <ControlledDemo/>
    </div>
  );
};

export default RouterDemo;
