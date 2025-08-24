import "../styles/Footer.css"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <img src="assets/zeroseklogo.png" alt="Ashtrasolutions Logo" loading="lazy" />
                            </div>
                            <p>Providing cutting-edge security solutions and web development services to help businesses thrive
                                in the digital landscape.</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=61578268196863" target="_blank" className="social-link"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://x.com/zeroseksolution" target="_blank" className="social-link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/zerosek-solutions-llp-55b2aa374/" target="_blank" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/zeroseksolutions/" target="_blank" className="social-link"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#products">Products</a></li>
                                <li><a href="about/index.html">About Us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#book-meeting">Book a Meeting</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <p><i className="fas fa-map-marker-alt"></i> <a className="footer-contactus-links"
                                href="https://www.google.com/maps/place/%E0%A4%B0%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%B0+%E0%A4%AB%E0%A5%8D%E0%A4%B2%E0%A5%88%E0%A4%9F/@25.369287,83.023739,348m/data=!3m1!1e3!4m6!3m5!1s0x398e2eefbc0c0719:0x6e1eda5f5d2db608!8m2!3d25.3692869!4d83.023739!16s%2Fg%2F11d_ymjwr6?hl=hi&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">Sarnath,
                                Varanasi, Uttar Pradesh India 221007</a></p>
                            <p><i className="fas fa-phone-alt"></i>
                                <a className="footer-contactus-links" href="tel:+916387705669">+916387705669</a>
                                <a className="footer-contactus-links" href="tel:+919838587277">+919838587277</a>
                            </p>
                            <p><i className="fas fa-envelope"></i> <a className="footer-contactus-links"
                                href="mailto:contact@zerosek.com">contact@zerosek.com</a></p>
                            <p><i className="fas fa-clock"></i> Mon-Sat: 9:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 ZeroSek Solutions. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}