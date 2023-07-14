import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Subscribe from "./Pages/Subscribe/Subscribe";
import { CardProvider } from "./Context/cardContext";
import ScrollReset from "./utils/scrollReset";

function App() {
  return (
    <>
      <CardProvider>
        <Navbar />
        <ScrollReset/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
