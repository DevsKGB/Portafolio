import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        {/* sección del logo */}
        <div className="logo">
          <button>Portafolio</button>
        </div>
        {/* links de navegación */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
