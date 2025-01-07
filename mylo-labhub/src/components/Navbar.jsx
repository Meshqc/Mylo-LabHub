import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo">Mylo LabHub</Link>
        <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login" className="btn-login">Log In</Link></li>
        </ul>
    </div>
    </nav>
);
}

export default Navbar;
