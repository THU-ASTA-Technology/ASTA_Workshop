import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
    return (
        <nav className="NavBar-container u-flex u-flex-justifySpace">
            {/* TODO: change the title of the navbar */}
            <div className="NavBar-title">ASTA Demo</div>
            <div className="NavBar-linkContainer u-flex">
                <Link to="/blog" className="NavBar-link">Blog</Link>
                <Link to="/tape" className="NavBar-link">Tape</Link>
                <Link to="/broadcast" className="NavBar-link">Broadcast</Link>
                <Link to="/" className="NavBar-link">Home</Link>
                {props.userId ?
                <button onClick={props.handleLogout} className="NavBar-link">
                    Logout
                </button>
                :
                <Link to="/login" className="NavBar-link">
                    Login
                </Link>
                }
            </div>
        </nav>
    );
};

export default NavBar;