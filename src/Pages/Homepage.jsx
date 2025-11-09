import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function Homepage () {
    return (
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <ContactMe/>
        <Footer/>
        </>
    )
}

export default Homepage;