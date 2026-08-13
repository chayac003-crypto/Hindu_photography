import { useIsMobile } from "./hooks/useIsMobile";
import MobileApp from "./components/mobile/MobileApp";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Introduction from "./components/Introduction";
import Gallery from "./components/Gallery";
import FeedbackComments from "./components/FeedbackComments";
import CinematicShowcase from "./components/CinematicShowcase";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function App() {
  const isMobile = useIsMobile(768);

  // Dedicated lightweight layout for mobile phones (< 768px)
  if (isMobile) {
    return <MobileApp />;
  }

  // Exact untouched website experience for Desktop & Laptop (>= 768px)
  return (
    <div className="relative font-body bg-char-950 text-ivory min-h-screen">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Introduction />
        <Gallery />
        <FeedbackComments />
        <CinematicShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
