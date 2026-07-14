import { Link } from "react-router-dom";
import { Send } from "lucide-react";


function Navbar(){
    return(
        <nav className = "navbar">
            <div className="logo">
            <span className="navbar-logo">ALGGlodo<sup>&copy;</sup></span>
            </div>
        <div className="navbar-links">
                <Link to="/">About</Link>
                <Link to="/">Works</Link>
                <Link to="/">Skills</Link>
        </div>
          <div className="contact">
                <Link to="/contact" className="contact-link">
                    <button className="contact-button">Let's Connect <Send size={15} /></button>
                </Link>
        </div>
    </nav>
    )
}

export default Navbar;