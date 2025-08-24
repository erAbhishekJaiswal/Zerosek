import "../styles/Blog.css"
export default function Blog() {
    return (
        <>
            {/* <!-- Blog Section --> */}
            <section className="section blog" id="blog">
                <div className="container">
                    <div className="section-title" data-animate="fade-in">
                        <h2>Latest Insights</h2>
                        <p>Stay updated with the latest trends in cybersecurity and web development</p>
                    </div>
                    <div className="blog-grid">
                        <div className="blog-post" data-animate="fade-left" data-delay="1">
                            <h3>Top 10 Web Vulnerabilities in 2025</h3>
                            <p>Understand the most common threats businesses face and how to mitigate them effectively.</p>
                            <a href="#">Read More</a>
                        </div>
                        <div className="blog-post" data-animate="fade-right" data-delay="2">
                            <h3>Why Every College Needs a Cloud-Based ERP</h3>
                            <p>Explore how digital transformation is reshaping education management.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}