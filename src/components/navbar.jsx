import { Link } from "react-router-dom";
import { Send } from "lucide-react";


function Navbar(){
    return(
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
        </nav>
    )
}

export default Navbar;