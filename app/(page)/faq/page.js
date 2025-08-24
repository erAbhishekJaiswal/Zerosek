import "../../styles/FAQ.css"
import Navbar from "@/app/(component)/Navbar"
import Footer from "@/app/(component)/Footer"
export default function FAQ() {
    return (
        <>
            <Navbar />
            {/* <!-- Faq Section --> */}
            <section className="section faq" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-item" >
                        <h4>What industries do you serve?</h4>
                        <p>We work with clients across education, fintech, healthcare, e-commerce, and government sectors.</p>
                    </div>
                    <div className="faq-item" >
                        <h4>How long does a VAPT engagement take?</h4>
                        <p>Depending on the scope, it typically takes between 3 to 10 business days.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}