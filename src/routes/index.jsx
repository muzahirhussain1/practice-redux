import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Profile from "../pages/profile";
import Heading from "../components/heading";

function RouterUse() {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterUse;
