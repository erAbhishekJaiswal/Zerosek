import Footer from "@/app/(component)/Footer";
import Navbar from "@/app/(component)/Navbar";
import "../../styles/about/about.css"
export default function about() {
    return (
        <>
            <Navbar />
            <section className="about-section">
                <div className="about-container">
                    <h1>About ZeroSEK Solutions</h1>
                    <p className="tagline">Empowering Businesses with Cybersecurity & Cutting-Edge Web Technologies</p>

                    <div className="content">
                        <p>
                            <strong>ZeroSEK Solutions</strong> is a forward-thinking technology company specializing in
                            <strong>Cybersecurity</strong> and <strong>Full-stack web development</strong>. We help startups,
                            enterprises, and institutions stay secure, efficient, and digitally future-ready.
                        </p>

                        <p>
                            Our core expertise lies in delivering comprehensive <strong>Vulnerability Assessment and Penetration
                                Testing (VAPT)</strong> services across <strong>Web, API, and Network infrastructures</strong>.
                            By identifying critical vulnerabilities, we ensure your digital assets remain protected against
                            modern cyber threats.
                        </p>

                        <p>
                            On the development front, our team crafts fast, scalable, and SEO-friendly digital products using
                            the
                            <strong>Next.js, MERN stack (MongoDB, Express, React, Node.js)</strong> and more. Whether you need a landing
                            page, an
                            e-commerce platform, a portfolio website, or a complex SaaS application — we build it with a focus
                            on design, performance, and user engagement.
                        </p>

                        <p>
                            One of our flagship innovations is the <strong>ZeroSEK College ERP System</strong> — a smart,
                            cloud-powered solution that streamlines administrative and academic processes. It enables
                            institutions to manage timetables, attendance, assignments, student records, and reporting from a
                            unified platform.
                        </p>

                        <p>
                            At ZeroSEK, we don't just build software — we build long-term partnerships. From digital
                            transformation to proactive security, our mission is to support your growth with technology that's
                            reliable, intelligent, and secure.
                        </p>

                        <p>
                            <strong>Let's build, secure, and scale — together.</strong>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}