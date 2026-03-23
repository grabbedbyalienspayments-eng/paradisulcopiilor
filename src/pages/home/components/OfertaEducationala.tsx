import { useRef } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const MAIN_CARD = {
  icon: "ri-magic-fill",
  title: "Activități educative și creative",
  desc: "Explorare, artă, știință și imaginație — copiii trăiesc experiențe care aprind curiozitatea.",
};

const SIDE_CARDS = [
  { icon: "ri-group-fill",        title: "Jocuri și experiențe de grup",     color: "bg-joy-yellow/25 border-joy-yellow/30",  icon_color: "text-joy-orange-dark bg-joy-yellow" },
  { icon: "ri-emotion-happy-fill",title: "Dezvoltare emoțională și socială", color: "bg-joy-green/12 border-joy-green/20",    icon_color: "text-white bg-joy-green"            },
  { icon: "ri-test-tube-fill",    title: "Ateliere și momente tematice",     color: "bg-joy-coral/10 border-joy-coral/20",    icon_color: "text-white bg-joy-coral"            },
  { icon: "ri-run-fill",          title: "Mișcare, energie și implicare",    color: "bg-joy-orange/10 border-joy-orange/20",  icon_color: "text-white bg-joy-orange-light"     },
  { icon: "ri-time-fill",         title: "Ritm adaptat vârstei copilului",   color: "bg-joy-cream-dark border-joy-orange/10", icon_color: "text-joy-yellow bg-joy-text-mid"    },
];

export default function OfertaEducationala() {
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const featRef   = useScrollReveal<HTMLDivElement>(80, "sr-left");
  const card0Ref  = useScrollReveal<HTMLDivElement>(80,  "sr");
  const card1Ref  = useScrollReveal<HTMLDivElement>(160, "sr");
  const card2Ref  = useScrollReveal<HTMLDivElement>(240, "sr");
  const card3Ref  = useScrollReveal<HTMLDivElement>(300, "sr");
  const card4Ref  = useScrollReveal<HTMLDivElement>(360, "sr");
  const quoteRef  = useScrollReveal<HTMLDivElement>(0, "sr-scale");
  const cardRefs  = [card0Ref, card1Ref, card2Ref, card3Ref, card4Ref];

  return (
    <section id="oferta" className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "linear-gradient(165deg, #FFFAF5 0%, #FFF3E8 60%, #FFFAF5 100%)" }}>

      {/* Decorative background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,209,102,0.18) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 65%)" }} />
      {/* Dot texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #FF6B35 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-2xl">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Ce facem împreună
          </span>
          <h2 className="font-fredoka leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
            Oferta{" "}
            <span className="text-joy-orange">educațională</span>
          </h2>
          <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
            La Paradisul Copiilor, copilăria este trăită activ. Punem accent pe joc, descoperire,
            creativitate, comunicare și experiențe care îi ajută pe copii să se dezvolte natural,
            cu încredere și bucurie.
          </p>
        </div>

        {/* ASYMMETRIC LAYOUT */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-5 mb-10">

          {/* FEATURED CARD — tall, gradient, left — with glow pulse + shimmer */}
          <div ref={featRef}
            className="relative rounded-[40px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 min-h-[340px] lg:min-h-[480px] animate-glow-pulse"
            style={{
              background: "linear-gradient(145deg, #FF6B35 0%, #EF476F 100%)",
            }}>

            {/* Shimmer sweep */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px]">
              <div className="absolute top-0 bottom-0 w-24 skew-x-[-20deg] animate-shimmer-x"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)", left: "-20%" }} />
            </div>

            {/* Background texture circles */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%)" }} />
            <div className="absolute -bottom-12 -right-12 w-52 h-52 rounded-full bg-white/8 pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-white/8 pointer-events-none" />

            {/* Floating achievement badge */}
            <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/18 backdrop-blur-sm rounded-full px-3 py-1.5"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
              <i className="ri-star-fill text-joy-yellow text-xs" />
              <span className="font-nunito font-700 text-white text-xs whitespace-nowrap">Program complet</span>
            </div>

            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"
                style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                <i className={`${MAIN_CARD.icon} text-3xl text-white`} />
              </div>
              <h3 className="font-fredoka text-white text-2xl sm:text-3xl leading-snug mb-4">
                {MAIN_CARD.title}
              </h3>
              <p className="font-nunito font-500 text-white/80 text-[16px] leading-relaxed">
                {MAIN_CARD.desc}
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="text-center">
                <p className="font-fredoka text-white text-xl leading-none">5+</p>
                <p className="font-nunito font-600 text-white/55 text-xs mt-0.5">ani activitate</p>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-center">
                <p className="font-fredoka text-white text-xl leading-none">3</p>
                <p className="font-nunito font-600 text-white/55 text-xs mt-0.5">grupe vârstă</p>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-center">
                <p className="font-fredoka text-white text-xl leading-none">100%</p>
                <p className="font-nunito font-600 text-white/55 text-xs mt-0.5">activitate practică</p>
              </div>
            </div>
          </div>

          {/* RIGHT: 2x grid of smaller cards — each individually revealed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SIDE_CARDS.map((card, i) => (
              <div key={card.title}
                ref={cardRefs[i]}
                className={`rounded-[28px] p-6 border flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 ${card.color}`}
              >
                <div className={`flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl ${card.icon_color.split(" ")[1]}`}>
                  <i className={`${card.icon} text-lg ${card.icon_color.split(" ")[0]}`} />
                </div>
                <h3 className="font-nunito font-800 text-joy-text-dark text-[15px] leading-snug pt-0.5">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Quote — premium redesign */}
        <div ref={quoteRef}
          className="relative overflow-hidden rounded-[32px] px-8 sm:px-14 py-9"
          style={{
            background: "linear-gradient(135deg, #FF6B35 0%, #EF476F 100%)",
            boxShadow: "0 12px 48px rgba(255,107,53,0.25)"
          }}>
          {/* Shimmer sweep on quote too */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
            <div className="absolute top-0 bottom-0 w-24 skew-x-[-20deg]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)", animation: "shimmer-x 4s ease-in-out infinite 1.5s", left: "-20%" }} />
          </div>
          <span className="absolute -top-4 -left-2 font-fredoka text-[8rem] leading-none text-white/8 select-none pointer-events-none">&ldquo;</span>
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20">
              <i className="ri-chat-quote-fill text-xl text-white/70" />
            </div>
            <p className="font-nunito font-600 text-white/90 text-[16px] sm:text-[18px] leading-relaxed text-center sm:text-left">
              Fiecare activitate este gândită astfel încât copilul să participe, să se exprime, să se
              bucure și să învețe într-un mod firesc. Nu urmărim doar ocuparea timpului, ci experiențe
              care contează în dezvoltarea lui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
