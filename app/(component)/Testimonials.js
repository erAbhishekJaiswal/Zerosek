import "../styles/Testimonials.css"
export default function Testimonials() {
    return (
        <>
            {/* <!-- Testimonials Section --> */}
            <section className="section testimonials" id="testimonials">
                <div className="container">
                    <div className="section-title" data-animate="fade-in">
                        <h2>What Our Clients Say</h2>
                        <p>Real feedback from organizations we've helped secure and grow</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card" data-animate="fade-left" data-delay="1">
                            <p>"ZeroSEK Solutions played a crucial role in establishing our digital presence by developing a custom web application for our system. Their team is exceptionally professional, responsive, and efficient."</p>
                            <h4>- Vasubandu, Founder of Gyaat</h4>
                        </div>
                        <div className="testimonial-card" data-animate="fade-right" data-delay="2">
                            <p>"Our College ERP system is help to manage easyly the all hardwork, thanks to the expert team at
                                Zerosek solutions."</p>
                            <h4>- Dr. Priya Mehta, Principal, Sunrise College</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}