import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ConatctMe from './components/Contact-me';
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact-us" element={<ConatctMe />}/>
      </Routes>
    </>
  );
};

export default App;
