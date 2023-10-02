import  { useState } from "react";
import "./nav.css"
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link  to="/" className="nav-logo">
                    Pandey_अंकित 😉 
                    </Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/"
                                className="nav-links"
                                end
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                
                                to="/about"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/contact"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/skills"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/resume"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/portfolio"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;