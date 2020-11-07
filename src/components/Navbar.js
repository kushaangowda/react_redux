import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// $ npm install react-router-dom
// React router package to manage routing independent of server
// Generaly, when u use a tag, req is sent to server
// using Link, react handles everything, without sending req to server
// so faster !!!
// NavLink same as Link, and adds class='active' to current page link

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper red darken-3">
                <a href="/" className="brand-logo left">
                    Router
                </a>
                <ul className="right">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
