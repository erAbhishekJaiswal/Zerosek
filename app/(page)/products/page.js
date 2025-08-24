import "../../styles/Products.css"
import Navbar from "@/app/(component)/Navbar"
import Footer from "@/app/(component)/Footer"
export default function Products() {
    return (
        <>
            <Navbar />
            {/* <!-- Products Section --> */}
            <section className="section products" id="products">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Products</h2>
                        <p>Innovative solutions designed to streamline your operations</p>
                    </div>
                    <div className="product-card" >
                        <div className="product-image">
                            <img src="assets/rep.jpg" alt="College ERP System" />
                        </div>
                        <div className="product-content">
                            <h3>College ERP System</h3>
                            <p>Our comprehensive College ERP System is designed to automate and streamline all administrative
                                and academic processes in educational institutions. From student admissions to examination
                                management, our solution covers all aspects of college administration.</p>
                            <p>Key features include student information management, attendance tracking, fee collection,
                                examination management, library management, and reporting dashboard.</p>
                            <a href="#book-meeting" className="cta-button">Request Demo</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}