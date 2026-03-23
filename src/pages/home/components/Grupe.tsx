import { useScrollReveal } from "../../../hooks/useScrollReveal";

const GROUPS = [
  {
    icon: "ri-seedling-fill",
    num: "01",
    badge: "Grupă mică",
    badgeColor: "bg-joy-green text-white",
    iconBg: "bg-joy-green",
    borderColor: "border-joy-green/25",
    accentBar: "bg-joy-green",
    description: "Pentru copiii aflați la începutul adaptării și descoperirii mediului de grădiniță. Punem accent pe acomodare, rutine simple, joc liber și relații de încredere cu educatoarea și colegii.",
    headline: "Adaptare și descoperire",
    features: [
      { icon: "ri-heart-fill",       text: "Adaptare blândă"     },
      { icon: "ri-gamepad-fill",      text: "Joc liber și explorare" },
      { icon: "ri-shield-check-fill", text: "Mediu de siguranță" },
    ],
    offset: "lg:mt-8",
  },
  {
    icon: "ri-fire-fill",
    num: "02",
    badge: "Grupă mijlocie",
    badgeColor: "bg-joy-orange text-white",
    iconBg: "bg-joy-orange",
    borderColor: "border-joy-orange/25",
    accentBar: "bg-joy-orange",
    featured: true,
    description: "Pentru consolidarea rutinei, comunicării și participării active. Copiii devin mai autonomi, interacționează mai mult și se implică în activități structurate, creative și de grup.",
    headline: "Rutină și comunicare",
    features: [
      { icon: "ri-group-fill",   text: "Activități de grup" },
      { icon: "ri-chat-3-fill",  text: "Comunicare activă" },
      { icon: "ri-palette-fill", text: "Creativitate"       },
    ],
    offset: "",
  },
  {
    icon: "ri-star-fill",
    num: "03",
    badge: "Grupă mare",
    badgeColor: "bg-joy-coral text-white",
    iconBg: "bg-joy-coral",
    borderColor: "border-joy-coral/25",
    accentBar: "bg-joy-coral",
    description: "Pentru autonomie mai mare, interacțiune, creativitate și pregătirea etapelor următoare. Copiii colaborează, rezolvă situații, se exprimă liber și consolidează deprinderile dobândite.",
    headline: "Autonomie și pregătire",
    features: [
      { icon: "ri-lightbulb-flash-fill", text: "Gândire independentă" },
      { icon: "ri-team-fill",            text: "Colaborare"            },
      { icon: "ri-award-fill",           text: "Pregătire etape noi"   },
    ],
    offset: "lg:mt-8",
  },
];

export default function Grupe() {
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const gridRef   = useScrollReveal<HTMLDivElement>(80, "sr");

  return (
    <section id="grupe" className="py-20 sm:py-28 bg-white overflow-hidden">
      {/* Section-level background decoration */}
      <div className="absolute left-0 right-0 pointer-events-none" style={{ top: 0 }}>
        <div className="w-full h-full opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #FF6B35 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-xl">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Organizare pe etape
          </span>
          <h2 className="font-fredoka text-joy-text-dark leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Grupe și <span className="text-joy-orange">organizare</span>
          </h2>
          <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
            Copiii au nevoie de activități, ritm și interacțiuni potrivite etapei lor.
            Organizarea este gândită pentru dezvoltarea firească a fiecărei vârste.
          </p>
        </div>

        {/* STAGGERED GROUP CARDS — stagger offset only on lg where all 3 are visible */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {GROUPS.map((g, i) => (
            <div key={g.badge}
              className={`flex flex-col rounded-[36px] overflow-hidden border ${g.borderColor} transition-all duration-500 ${g.offset}`}
              style={{
                background: g.featured
                  ? "linear-gradient(158deg, #FFF8F4 0%, #FFF3E8 100%)"
                  : "#FAFAFA",
                boxShadow: g.featured
                  ? "0 20px 64px rgba(255,107,53,0.16), 0 4px 16px rgba(0,0,0,0.04)"
                  : "0 4px 24px rgba(0,0,0,0.04)",
                transitionDelay: `${i * 90}ms`
              }}>

              {/* Top accent bar */}
              <div className={`h-1 w-full ${g.accentBar}`} />

              <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <span className="font-fredoka text-[4.5rem] leading-none select-none"
                    style={{ color: g.featured ? "rgba(255,107,53,0.08)" : "rgba(0,0,0,0.05)" }}>
                    {g.num}
                  </span>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${g.iconBg} text-white`}
                    style={{ boxShadow: g.featured ? "0 6px 20px rgba(255,107,53,0.32)" : "none" }}>
                    <i className={`${g.icon} text-2xl`} />
                  </div>
                </div>

                {/* Badge */}
                <div>
                  <span className={`inline-block font-nunito font-700 text-sm px-3 py-1.5 rounded-full ${g.badgeColor}`}>
                    {g.badge}
                  </span>
                  <p className="font-fredoka text-joy-text-dark text-lg mt-2 leading-snug">{g.headline}</p>
                </div>

                {/* Description */}
                <p className="font-nunito font-500 text-joy-text-mid text-[15px] leading-relaxed flex-1">
                  {g.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-2 pt-4 border-t border-black/5">
                  {g.features.map((f) => (
                    <div key={f.text} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white"
                        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                        <i className={`${f.icon} text-joy-orange text-xs`} />
                      </div>
                      <span className="font-nunito font-700 text-joy-text-dark text-sm">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support line */}
        <div className="mt-12 max-w-3xl mx-auto text-center rounded-[32px] bg-joy-cream px-8 py-7"
          style={{ border: "1px solid rgba(255,107,53,0.08)" }}>
          <div className="w-8 h-8 flex items-center justify-center mx-auto mb-3">
            <i className="ri-leaf-fill text-xl text-joy-orange/50" />
          </div>
          <p className="font-nunito font-600 text-joy-text-mid text-[16px] sm:text-[17px] leading-relaxed">
            Fiecare grupă este parte dintr-un parcurs natural, în care copilul este
            susținut potrivit etapei sale de dezvoltare.
          </p>
        </div>
      </div>
    </section>
  );
}
