import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Realtor from "../components/Realtor";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Gallery from "../components/Gallery";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";



const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Realtor />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Projects />
      <Clients />
      <FooterBanner />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Landing;
