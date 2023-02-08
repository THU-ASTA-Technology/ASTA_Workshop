import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div className="Navbar-container u-flex u-flex-justifySpace">
            <div className="Navbar-title">
                导航栏 is here
            </div>
            <div className="NavBar-linkContainer u-flex">
                <Link to="/" className="NavBar-link">Home</Link>
                <Link to="/broadcast" className="NavBar-link">Broadcast</Link>
                <Link to="/tape" className="NavBar-link">Tape</Link>
                <Link to="/blog" className="NavBar-link">Blog</Link>
            </div>
        </div>);
};
export default Navbar;