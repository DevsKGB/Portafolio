import React, { useState } from "react";
import BurguerButton from "../BurguerButton";

import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="NavContainer">
        <h2>Navbar Responsive</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="burger">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
