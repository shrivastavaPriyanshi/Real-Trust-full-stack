import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Realtor from "../components/Realtor";
import Gallery from "../components/Gallery";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import FooterBanner from "../components/FooterBanner";
import FooterBottom from "../components/FooterBottom";

const Landing = () => {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <Hero />

      {/* OPTIONAL */}
      <Realtor />

      {/* 👇 GALLERY MUST COME HERE */}
      <Gallery />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <WhyChooseUs />

      {/* PROJECTS */}
      <Projects />

      {/* TESTIMONIALS */}
      <Clients />

      {/* CONTACT */}
      <FooterBanner />

      {/* COPYRIGHT */}
      <FooterBottom />
    </>
  );
};

export default Landing;
