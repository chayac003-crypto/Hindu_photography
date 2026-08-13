import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Introduction from "./components/Introduction";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function App() {
  return (
    <div className="relative font-body bg-char-950 text-ivory min-h-screen max-w-full overflow-x-hidden">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 max-w-full overflow-x-hidden">
        <Hero />
        <Services />
        <Introduction />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
