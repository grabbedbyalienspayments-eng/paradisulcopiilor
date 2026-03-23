import Header from "./components/Header";
import Hero from "./components/Hero";
import DespreNoi from "./components/DespreNoi";
import OfertaEducationala from "./components/OfertaEducationala";
import OZiLaJoyland from "./components/OZiLaJoyland";
import ServiciiSuport from "./components/ServiciiSuport";
import CtaMidPage from "./components/CtaMidPage";
import Grupe from "./components/Grupe";
import Taxe from "./components/Taxe";
import Galerie from "./components/Galerie";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

/* ── Organic wave pill that separates two same-bg sections ── */
function WavePill({ color = "bg-joy-cream" }: { color?: string }) {
  return (
    <div className="relative h-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className={`absolute left-1/2 -translate-x-1/2 w-[120%] h-16 ${color} rounded-tl-[50%] rounded-tr-[50%]`} />
    </div>
  );
}

/* ── Thin warm accent divider ── */
function AccentLine() {
  return (
    <div className="flex items-center justify-center py-4 pointer-events-none" aria-hidden="true">
      <div className="flex items-center gap-2 opacity-30">
        <div className="h-px w-16 bg-joy-orange" />
        <div className="w-1.5 h-1.5 rounded-full bg-joy-yellow" />
        <div className="w-1 h-1 rounded-full bg-joy-orange" />
        <div className="w-1.5 h-1.5 rounded-full bg-joy-yellow" />
        <div className="h-px w-16 bg-joy-orange" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-nunito bg-joy-cream min-h-screen">
      <Header />

      {/* ── ENTRY: Hero — cinematic first fold ── */}
      <Hero onNavClick={scrollToSection} />

      {/* ── EMERGE: Despre Noi — editorial, warm, human ── */}
      {/* -mt-8 + section-pill-top handled inside DespreNoi itself */}
      <DespreNoi />

      {/* ── EXPAND: Oferta — curated, alive, asymmetric ── */}
      <OfertaEducationala />

      {/* ── JOURNEY: O zi — bold orange immersive section ── */}
      {/* Built-in top/bottom organic transitions inside OZiLaJoyland */}
      <OZiLaJoyland />

      {/* ── GROUND: Servicii — reassuring, bento, visual depth ── */}
      <ServiciiSuport />

      {/* Accent divider before CTA */}
      <AccentLine />

      {/* ── PAUSE: CTA Mid — cinematic breath, conversion moment ── */}
      <CtaMidPage onNavClick={scrollToSection} />

      {/* ── DISCOVER: Grupe — structured, staggered, friendly ── */}
      <Grupe />

      {/* ── DECIDE: Taxe — premium clear, no admin feeling ── */}
      <Taxe />

      {/* ── FEEL: Galerie — rich visual, cinematic hero image ── */}
      <Galerie />

      {/* Accent divider before contact */}
      <AccentLine />

      {/* ── CONNECT: Contact + FAQ — warm, inviting, easy ── */}
      <ContactSection />

      {/* ── CLOSE: Footer — warm gradient, complete ── */}
      <FooterSection />
    </main>
  );
}
