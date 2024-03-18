import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurguerButton from "../BurguerButton";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="NavContainer">
      <h2>Navbar Responsive</h2>
      <ul className={`links ${clicked ? "active" : ""}`}>
        <li>
          <Link to="/aboutme">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
      <div className="burger">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;

