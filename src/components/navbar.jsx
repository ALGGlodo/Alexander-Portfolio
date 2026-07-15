import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="navbar-logo">ALGGlodo<sup>®</sup></span>
      </div>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#skills">Skills</a>
      </div>

      <div className="contact">
        <a href="#contact" className="contact-link">
          <button className="contact-button">Let's Connect <Send size={15} /></button>
        </a>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-mobile-menu ${isOpen ? "is-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#works" onClick={closeMenu}>Works</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu} className="contact-link">
          <button className="contact-button">Let's Connect <Send size={15} /></button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;