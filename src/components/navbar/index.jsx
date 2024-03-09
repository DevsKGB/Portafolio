import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="containernavbar">
      <nav className="navbar">
        <div className="logo">
          {/* Aquí puedes incluir tu logo si tienes uno, por ejemplo, usando <img src="path/to/your/logo.png" alt="Logo" /> */}
        </div>
        <button className="boton-nav" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Cerrar" : "Menú"} {/* Cambia el texto según el estado */}
        </button>
        {isOpen && (
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </nav>
      
    </div>
  );
};

export default Navbar;
