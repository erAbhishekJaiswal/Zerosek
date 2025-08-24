import Hero from "../(component)/Hero"
import Services from "../(component)/Services"
import Products from "../(component)/Products"
import Testimonials from "../(component)/Testimonials"
import Blog from "../(component)/Blog"
import FAQ from "../(component)/FAQ"
import Contact from "../(component)/Contact"

// import { useScrollHeader } from "../hooks/useScrollHeader"

export default function App() {

    return (
        <>
            <Hero />
            <Services />
            <Products />
            <Testimonials />
            <Blog />
            <FAQ />
            <Contact />
        </>
    )
}