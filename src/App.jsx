import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
