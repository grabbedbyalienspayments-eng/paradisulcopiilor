import { useScrollReveal } from "../../../hooks/useScrollReveal";

interface CtaMidPageProps { onNavClick: (href: string) => void; }

export default function CtaMidPage({ onNavClick }: CtaMidPageProps) {
  const ref = useScrollReveal<HTMLDivElement>(0, "sr-scale");

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ctamid-v2.webp"
          alt="Atmosfera Paradisului Copiilor"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-joy-orange-dark/85 via-joy-orange/70 to-joy-orange-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-white/4 pointer-events-none animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-3 h-3 rounded-full bg-joy-yellow/60 pointer-events-none animate-pulse-scale" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/50 pointer-events-none animate-pulse-scale" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Sun icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-8 animate-float"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <i className="ri-sun-fill text-4xl text-joy-yellow w-10 h-10 flex items-center justify-center" />
        </div>

        <h2 className="font-fredoka text-white text-shadow leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Vrei să vezi atmosfera{" "}
          <span className="text-joy-yellow text-shadow-glow">Paradisului Copiilor</span>{" "}
          în realitate?
        </h2>
        <p className="font-nunito font-500 text-white/80 text-[17px] sm:text-lg leading-relaxed mb-10 text-shadow">
          Programează o vizită și descoperă direct spațiul, energia locului și modul
          în care copiii învață și se bucură de fiecare zi.
        </p>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); onNavClick("#contact"); }}
          className="inline-flex items-center gap-3 font-nunito font-800 text-joy-orange px-9 py-4 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-joy-yellow"
          style={{
            fontSize: "1.1rem",
            background: "#FFFAF5",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          <i className="ri-calendar-check-fill w-5 h-5 flex items-center justify-center" />
          Programează o vizită
        </a>
      </div>
    </section>
  );
}
