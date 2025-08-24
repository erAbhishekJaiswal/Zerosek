import "../styles/Service.css"
export default function Services() {
    return (
        <>
            {/* <!-- Services Section --> */}
            <section className="section" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>We offer a wide range of professional services to meet your business needs</p>
                    </div>
                    <div className="services-grid">

                        {/* <!-- VAPT Services --> */}
                        <div className="service-card" data-animate="fade-left" data-delay="1">
                            <div className="service-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <a className="service-list-link" href="./services/VAPT.html"><h3>VAPT Services</h3></a>
                            <p>Comprehensive vulnerability assessment and penetration testing to secure your digital assets.</p>
                            <ul className="service-list">
                                <a className="service-list-link" href="./services/VAPT.html"><li>Web Application VAPT</li></a>
                                <a className="service-list-link" href="./services/VAPT.html"><li>API VAPT</li></a>
                                <a className="service-list-link" href="./services/VAPT.html"><li>Network VAPT</li></a>
                            </ul>
                        </div>

                        {/* <!-- Web Development --> */}
                        <div className="service-card" data-animate="fade-in" data-delay="2">
                            <div className="service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <a className="service-list-link" href="./services/Development.html"><h3>Web Development</h3></a>
                            <p>Custom web solutions tailored to your business requirements.</p>
                            <ul className="service-list">
                                <a className="service-list-link" href="./services/Development.html"><li>Website from scratch to Deployment</li></a>
                                <a className="service-list-link" href="./services/Development.html"><li>MERN Stack Development</li></a>
                                <a className="service-list-link" href="./services/Development.html"><li>Simple Landing Pages</li></a>
                                <a className="service-list-link" href="./services/Development.html"><li>Website Maintenance</li></a>
                            </ul>
                        </div>

                        {/* <!-- Other Services --> */}
                        <div className="service-card" data-animate="fade-right" data-delay="3">
                            <div className="service-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Other Solutions</h3>
                            <p>Additional services to support your business growth.</p>
                            <ul className="service-list">
                                <li>Security Consulting</li>
                                <li>Code Review</li>
                                <li>Compliance Assistance</li>
                                <li>Technical Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}