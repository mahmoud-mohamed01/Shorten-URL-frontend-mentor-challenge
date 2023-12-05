import React from "react";
import "./style.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import UrlGenerator from "./UrlGenerator/UrlGenerator";
import Statstics from "./Statstics/Statstics";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Hero></Hero>
      <UrlGenerator></UrlGenerator>
      <Statstics></Statstics>
      <Footer></Footer>
    </div>
  );
}

export default App;
