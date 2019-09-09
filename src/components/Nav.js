import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to='/' className="nav-link">Home</Link> |
            <Link to='/about' className="nav-link">About</Link>
        </nav>
    )
}

export default Nav;
