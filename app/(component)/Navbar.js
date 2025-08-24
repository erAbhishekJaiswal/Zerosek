"use client";

import "../styles/Navbar.css"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 10) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <img src="/assets/zeroseklogo.png" alt="Zeroseksolutions Logo" id="logo-img" />
                            <span className="logo-text">Solutions</span>
                        </div>
                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                            <li className="li-link"><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li className="li-link"><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                            <li className="li-link"><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                            <li className="li-link"><Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                            <li className="li-link"><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                            <li className="li-link"><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                        <button
                            className="mobile-menu-btn"
                            id="mobileMenuBtn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
}