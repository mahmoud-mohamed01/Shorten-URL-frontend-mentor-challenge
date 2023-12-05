import React from "react";
import "./Statstics.css";
import recognitionimg from "../../images/icon-brand-recognition.svg";
import recordsimg from "../../images/icon-detailed-records.svg";
import customizableimg from "../../images/icon-fully-customizable.svg";

function Statstics() {
  return (
    <div className="stat-box">
      <div className="stat-text">
        <h1>Advanced Statitics</h1>
        <p>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard.
        </p>
      </div>

      <div className="boxs-container">
        <div className="box">
          <div className="icon">
            <img src={recognitionimg} alt="" />
          </div>
          <h2>Brand Recognitaion</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <img src={recordsimg} alt="" />
          </div>
          <h2>Brand Recognitaion</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <img src={customizableimg} alt="" />
          </div>
          <h2>Brand Recognitaion</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>

      <div className="boost-box">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Statstics;
