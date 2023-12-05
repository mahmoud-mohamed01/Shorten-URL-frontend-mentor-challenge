import React, { useState } from "react";
import menu from "../../images/icons8-menu-50.png";
import "./Navbar.css";
import logo from "../../images/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className={menuOpen ? "links-container" : "links-container hide "}>
          <ul className="links">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="login-signup">
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      <div className="menu-mobile">
        <img
          src={menu}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
