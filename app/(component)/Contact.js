import "../styles/Contact.css"
export default function Contact (){
    return(
        <>
         {/* <!-- Contact Section --> */}
    <section className="section contact" id="contact">
        <div className="container">
            <div className="section-title" data-animate="fade-in">
                <h2>Contact Us</h2>
                <p>Get in touch with our team for any inquiries or support</p>
            </div>
            <div className="contact-container">
                <div className="contact-info" data-animate="fade-left" data-delay="1">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Our Office</h4>
                            <p>Sarnath, Varanasi, Uttar Pradesh India 221007</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Phone</h4>
                            <p><a className="contact-us-links" href="tel:+916387705669">+91 6387705669</a></p>
                            <p><a className="contact-us-links" href="tel:+919838587277">+91 9838587277</a></p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Email</h4>
                            <p><a className="contact-us-links" href="mailto:contact@zerosek.com">contact@zerosek.com</a></p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Working Hours</h4>
                            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="contact-map" data-animate="fade-in">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22944.008036110372!2d83.00419223762022!3d25.37297453651202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ee870d6a12b%3A0xa1c385b2ea1fa974!2z4KS44KS-4KSw4KSo4KS-4KSlLCDgpLXgpL7gpLDgpL7gpKPgpLjgpYAsIOCkieCkpOCljeCkpOCksCDgpKrgpY3gpLDgpKbgpYfgpLYgMjIxMDA3!5e1!3m2!1shi!2sin!4v1751201464346!5m2!1shi!2sin"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22944.008036110372!2d83.00419223762022!3d25.37297453651202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ee870d6a12b%3A0xa1c385b2ea1fa974!2z4KS44KS-4KSw4KSo4KS-4KSlLCDgpLXgpL7gpLDgpL7gpKPgpLjgpYAsIOCkieCkpOCljeCkpOCksCDgpKrgpY3gpLDgpKbgpYfgpLYgMjIxMDA3!5e1!3m2!1shi!2sin!4v1751201464346!5m2!1shi!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>
            </div>
        </div>
    </section>
        </>
    )
}