import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Converts the original navbar with:
 * - Mobile menu toggle using useState
 * - Scroll background change using useEffect + window.scroll
 * - Smooth scroll navigation (handled by anchor tags)
 */
const Navbar = () => {
    // State for mobile menu toggle (replaces DOM manipulation)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navBackground, setNavBackground] = useState('rgba(26,26,26,0.95)');

    // Handle scroll event for navbar background change
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground('rgba(26,26,26,0.98)');
            } else {
                setNavBackground('rgba(26,26,26,0.95)');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when link is clicked
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav id="navbar" style={{ background: navBackground }}>
                <div className="nav-container">
                    <a href="#home" className="logo">DevSolanki</a>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                        <li><a href="#portfolio-projects" onClick={handleLinkClick}>Projects</a></li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1mHGBi9JIEqNIgLPf0Q5jpAi6AJKLl11L/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={handleLinkClick}
                                className="nav-resume-link"
                            >
                                Resume
                            </a>
                        </li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                    <div
                        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            {/* Overlay for mobile menu */}
            <div 
                className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
                onClick={handleLinkClick}
            ></div>
        </>
    );
};

export default Navbar;
