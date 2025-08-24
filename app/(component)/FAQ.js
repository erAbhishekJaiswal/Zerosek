import "../styles/FAQ.css"
export default function FAQ() {
    return (
        <>
            {/* <!-- Faq Section --> */}
            <section className="section faq" id="faq">
                <div className="container">
                    <div className="section-title" data-animate="fade-in">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-item" data-animate="fade-left" data-delay="1">
                        <h4>What industries do you serve?</h4>
                        <p>We work with clients across education, fintech, healthcare, e-commerce, and government sectors.</p>
                    </div>
                    <div className="faq-item" data-animate="fade-left" data-delay="1">
                        <h4>How long does a VAPT engagement take?</h4>
                        <p>Depending on the scope, it typically takes between 3 to 10 business days.</p>
                    </div>
                </div>
            </section>
        </>
    )
}