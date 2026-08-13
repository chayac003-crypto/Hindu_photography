import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobileServices from "./MobileServices";
import MobileGallery from "./MobileGallery";
import MobileAbout from "./MobileAbout";
import MobileContact from "./MobileContact";
import MobileFooter from "./MobileFooter";

export default function MobileApp() {
  return (
    <div className="relative font-body bg-char-950 text-ivory min-h-screen max-w-full overflow-x-hidden selection:bg-beigegold-500 selection:text-char-950">
      <MobileNavbar />
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <MobileHero />
        <MobileServices />
        <MobileGallery />
        <MobileAbout />
        <MobileContact />
      </main>
      <MobileFooter />
    </div>
  );
}
