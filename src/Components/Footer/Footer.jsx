import React from "react";
import "./Footer.css";
import facebookicon from "../../images/icon-facebook.svg";
import painteresticon from "../../images/icon-pinterest.svg";
import instaicon from "../../images/icon-instagram.svg";
import twittericon from "../../images/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1>Shortly</h1>
      </div>

      <div className="links-box">
        <div className="link-list">
          <h2>features</h2>
          <ul>
            <li>Link shortening</li>
            <li> Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="link-list">
          <h2>Resources</h2>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li> Support</li>
          </ul>
        </div>
        <div className="link-list">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>our team</li>
            <li>Carrers</li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <img src={facebookicon} alt="" />
        <img src={twittericon} alt="" />
        <img src={painteresticon} alt="" />
        <img src={instaicon} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
