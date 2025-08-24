"use client";
import "../styles/Hero.css"
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import hero from "../../public/assets/herolog.png"

export default function Hero() {
    useEffect(() => {
        // Add animation classes when component mounts
        const animateElements = () => {
            const elements = document.querySelectorAll('[data-animate]');
            elements.forEach(el => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(el);
            });
        };

        animateElements();
    }, []);
    return (
        <>
            <section className="hero" id="home" data-animate="fade-in">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1><span className="highlight">Build Smart, Stay Secure.</span> </h1>
                        <div className="mobile-hero-image">
                            <img src={hero} alt="Cybersecurity & Web Solutions" loading="lazy" />
                        </div>
                        <p className="tagline">
                            Your partner in Cybersecurity, Web Innovation, and Educational Solutions —
                            <span className="quote-text">"Empowering your digital future through cutting-edge development and
                                bulletproof security."</span>
                        </p>
                        <p className="description">
                            We provide end-to-end cybersecurity and development solutions, specializing in Vulnerability
                            Assessment & Penetration Testing (VAPT) for Web, API, and Network security.
                        </p>
                        <div className="hero-buttons">
                            <a href="#services" className="cta-button">Explore Services</a>
                            <a href="#contact" className="cta-button secondary">Contact Us</a>
                            {/* <!-- <a href="#book-meeting" className="cta-button secondary">Book a Free Consultation</a> --> */}
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="assets/herolog.png" alt="Cybersecurity & Web Solutions" />
                    </div>
                </div>
            </section>
        </>
    )
}