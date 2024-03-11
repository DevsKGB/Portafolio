import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "../BurguerButton";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="NavContainer"> 
      <h2>Navbar <span>Responsive</span></h2>
      <div className="links active">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="burguer">
      <BurguerButton />
      </div>

      </div>
    </>
  );
};

export default Navbar;
