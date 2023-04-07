import "./App.css";
import TechNews from "./components/TechNews";
import Business from "./components/Business";
import Educational from "./components/Educational";
import Nature from "./components/Nature";
import Health from "./components/Health";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/technology" element={<TechNews pageSize={12} />} />
        <Route path="/business" element={<Business pageSize={12} />} />
        <Route path="/educational" element={<Educational pageSize={12} />} />
        <Route path="/nature" element={<Nature pageSize={12} />} />
        <Route path="/health" element={<Health pageSize={12}/>} />
      </Routes>
    </>
  );
}

export default App;
