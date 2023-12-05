import React from "react";
import heroimg from "../../images/illustration-working.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="left-side">
        <h1>
          More than just <br /> shorter links
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <div className="right-side">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
