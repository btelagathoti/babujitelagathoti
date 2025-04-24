import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import babujiPic from '../images/babujiPic.jpeg';
import './Layout.css';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="layout-container">
            {/* Logo/Image Section */}
            <div className="layout-logo-section">
                <Link to="/">
                    <img 
                        src={babujiPic}
                        alt="Profile" 
                        className="layout-profile-image"
                    />
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="layout-hamburger-section">
                <button 
                    className="hamburger-button" 
                    onClick={toggleMenu}
                    ref={buttonRef}
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link" onClick={toggleMenu}>About me</Link></li>
                        <li className="nav-item"><Link to="/experience" className="nav-link" onClick={toggleMenu}>Experience</Link></li>
                        <li className="nav-item"><Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link></li>
                        <li className="nav-item"><a className="nav-link" href="/resume.html" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li className="nav-item"><Link to="/projects" className="nav-link" onClick={toggleMenu}>Personal Projects</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Me</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout; 