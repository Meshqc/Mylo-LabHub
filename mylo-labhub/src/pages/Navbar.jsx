import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
return (
    <nav className="navbar">
    <div className="logo">Mylo LabHub</div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
    </ul>
    </nav>
);
}

export default Navbar;
