import { useScrollReveal } from "../../../hooks/useScrollReveal";

const HIGHLIGHTS = [
  { icon: "ri-sun-fill",          color: "bg-joy-yellow text-joy-orange-dark", label: "Bucurie și energie pozitivă"         },
  { icon: "ri-seedling-fill",     color: "bg-joy-green text-white",            label: "Învățare prin experiențe reale"      },
  { icon: "ri-emotion-happy-fill",color: "bg-joy-coral text-white",            label: "Dezvoltare emoțională și socială"    },
  { icon: "ri-home-heart-fill",   color: "bg-joy-orange text-white",           label: "Atmosferă apropiată de familie"      },
];

export default function DespreNoi() {
  const leftRef  = useScrollReveal<HTMLDivElement>(0,   "sr-left");
  const rightRef = useScrollReveal<HTMLDivElement>(160, "sr-right");
  const botRef   = useScrollReveal<HTMLDivElement>(0,   "sr");

  return (
    <section id="despre-noi"
      className="relative z-10 -mt-8 bg-white section-pill-top pt-20 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-grid-warm">

      {/* Watermark background text — barely visible, purely decorative */}
      <span
        className="absolute top-8 left-0 right-0 text-center font-fredoka text-[16vw] leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden"
        style={{ color: "rgba(255, 107, 53, 0.04)" }}
      >
        PARADISUL
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Eyebrow */}
        <div className="text-center mb-16">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-3">
            Cine suntem
          </span>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center mb-16">

          {/* LEFT: text editorial */}
          <div ref={leftRef} className="flex flex-col gap-6">
            <h2 className="font-fredoka text-joy-text-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Despre{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-joy-orange">Paradisul Copiilor</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-joy-yellow/35 -z-10 rounded-full" />
              </span>
            </h2>

            {/* Pull quote */}
            <div className="border-l-[5px] border-joy-orange rounded-sm pl-6 py-1">
              <p className="font-nunito font-700 text-joy-text-dark text-lg sm:text-xl leading-snug italic">
                &ldquo;Credem că cei mici au nevoie de mai mult decât supraveghere sau rutină.&rdquo;
              </p>
            </div>

            <p className="font-nunito font-500 text-joy-text-mid leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.06rem)" }}>
              Paradisul Copiilor este un loc construit în jurul copilăriei trăite frumos, cu
              energie, curiozitate și bucurie. Au nevoie de un mediu în care să se simtă bine,
              să fie încurajați, să descopere, să se exprime și să crească în ritmul lor.
            </p>
            <p className="font-nunito font-500 text-joy-text-mid leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.06rem)" }}>
              Am construit un spațiu în care activitățile, jocul, interacțiunea și experiențele
              de zi cu zi devin parte naturală din dezvoltarea copilului. Atmosfera este caldă,
              prietenoasă și vie, iar relația cu părinții transmite încredere, claritate și apropiere.
            </p>
          </div>

          {/* RIGHT: Circular image composition */}
          <div ref={rightRef} className="flex items-center justify-center lg:justify-end">
            {/* Overflow clip prevents badges from causing horizontal scroll on mobile */}
            <div className="relative" style={{ isolation: "isolate" }}>
              {/* Orbit rings — sm+ only */}
              <div className="hidden sm:block absolute rounded-full animate-spin-slow pointer-events-none"
                style={{ inset: "-20px", border: "1.5px dashed rgba(255,107,53,0.2)" }} />
              <div className="hidden sm:block absolute rounded-full animate-spin-reverse pointer-events-none"
                style={{ inset: "-40px", border: "1px solid rgba(255,209,102,0.15)", animationDuration: "32s" }} />

              {/* Circle image */}
              <div className="w-52 h-52 sm:w-72 sm:h-72 lg:w-88 lg:h-88 xl:w-96 xl:h-96 rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 24px 80px rgba(255,107,53,0.25), 0 8px 32px rgba(0,0,0,0.08)" }}>
                <img
                  src="/images/despre-circ.webp"
                  alt="Atmosfera caldă la Paradisul Copiilor"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center img-zoom"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* Top-right badge — only sm+ to avoid mobile overflow */}
              <div className="hidden sm:flex absolute top-4 -right-4 lg:-right-8 items-center gap-2 bg-white rounded-2xl px-3 py-2"
                style={{ boxShadow: "0 4px 20px rgba(255,107,53,0.14)", zIndex: 10 }}>
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-joy-orange/12">
                  <i className="ri-sun-fill text-joy-orange text-base" />
                </div>
                <div>
                  <p className="font-fredoka font-700 text-sm text-joy-orange leading-none">Creștem</p>
                  <p className="font-nunito font-600 text-joy-text-light text-xs">împreună</p>
                </div>
              </div>

              {/* Bottom-left badge — only sm+ to avoid mobile overflow */}
              <div className="hidden sm:flex absolute bottom-4 -left-4 lg:-left-10 items-center gap-2 bg-white rounded-2xl px-3 py-2"
                style={{ boxShadow: "0 4px 20px rgba(255,107,53,0.14)", zIndex: 10 }}>
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-joy-green/15">
                  <i className="ri-heart-3-fill text-joy-green-dark text-base" />
                </div>
                <div>
                  <p className="font-fredoka font-700 text-sm text-joy-green-dark leading-none">Cu drag</p>
                  <p className="font-nunito font-600 text-joy-text-light text-xs">de la 1 an</p>
                </div>
              </div>

              {/* Star accent dot — md+ only */}
              <div className="hidden md:flex absolute bottom-12 -right-5 w-10 h-10 rounded-full bg-joy-yellow items-center justify-center animate-float"
                style={{ animationDelay: "0.5s", boxShadow: "0 4px 16px rgba(255,209,102,0.4)", zIndex: 10 }}>
                <i className="ri-star-fill text-joy-orange-dark text-base" />
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHT STRIP — ref on wrapper so IntersectionObserver sees it */}
        <div ref={botRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {HIGHLIGHTS.map((h, i) => (
            <div key={h.label}
              className={`flex flex-col items-center gap-3 bg-joy-cream rounded-3xl px-4 py-5 text-center border border-joy-orange/6 transition-all duration-300 hover:-translate-y-1 stagger-${i + 1}`}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${h.color}`}>
                <i className={`${h.icon} text-xl`} />
              </div>
              <span className="font-nunito font-700 text-joy-text-dark text-sm leading-snug">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
