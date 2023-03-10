import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
