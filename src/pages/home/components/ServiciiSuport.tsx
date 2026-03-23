import { useScrollReveal } from "../../../hooks/useScrollReveal";

const BLOCKS = [
  {
    icon: "ri-shield-check-fill",
    title: "Mediu sigur și prietenos",
    gradient: "linear-gradient(135deg, #5AA85D 0%, #4CAF50 100%)",
    glow: "rgba(90,168,93,0.45)",
    bg: "bg-joy-green/10",
    border: "border-joy-green/15",
    size: "lg",
  },
  {
    icon: "ri-message-smile-fill",
    title: "Comunicare deschisă cu părinții",
    gradient: "linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)",
    glow: "rgba(255,107,53,0.4)",
    bg: "bg-joy-orange/8",
    border: "border-joy-orange/12",
    size: "sm",
  },
  {
    icon: "ri-home-heart-fill",
    title: "Atmosferă apropiată și caldă",
    gradient: "linear-gradient(135deg, #EF476F 0%, #FF6B8A 100%)",
    glow: "rgba(239,71,111,0.4)",
    bg: "bg-joy-coral/8",
    border: "border-joy-coral/12",
    size: "sm",
  },
  {
    icon: "ri-sparkling-2-fill",
    title: "Experiențe variate, nu rutină rigidă",
    gradient: "linear-gradient(135deg, #FFD166 0%, #FFC233 100%)",
    glow: "rgba(255,209,102,0.5)",
    bg: "bg-joy-yellow/18",
    border: "border-joy-yellow/25",
    size: "sm",
  },
  {
    icon: "ri-heart-3-fill",
    title: "Accent pe relații, nu doar pe program",
    gradient: "linear-gradient(135deg, #EF476F 0%, #E5204A 100%)",
    glow: "rgba(239,71,111,0.4)",
    bg: "bg-joy-coral/8",
    border: "border-joy-coral/12",
    size: "sm",
  },
];

function PremiumIcon({ icon, gradient, glow, large = false }: { icon: string; gradient: string; glow: string; large?: boolean }) {
  const size = large ? 72 : 52;
  const iconSize = large ? "text-3xl" : "text-xl";
  const radius = large ? "rounded-2xl" : "rounded-xl";
  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center ${radius} relative`}
      style={{
        width: size,
        height: size,
        background: gradient,
        boxShadow: `0 8px 24px ${glow}, 0 2px 8px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Inner highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit]"
        style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.25) 0%, transparent 60%)" }}
      />
      <i className={`${icon} ${iconSize} text-white relative z-10`} />
    </div>
  );
}

export default function ServiciiSuport() {
  const leftRef = useScrollReveal<HTMLDivElement>(0, "sr-left");
  const rightRef = useScrollReveal<HTMLDivElement>(100, "sr-right");

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Contextul contează
          </span>
          <h2 className="font-fredoka leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Mai mult decât un{" "}
            <span className="text-joy-orange">program obișnuit</span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">

          {/* LEFT: text + image */}
          <div ref={leftRef} className="flex flex-col gap-6">
            <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
              Pentru părinți, contează nu doar activitățile, ci întregul context în care copilul
              petrece timpul zilnic. De aceea, Paradisul Copiilor este un mediu atent organizat,
              prietenos și orientat spre bunăstarea copilului.
            </p>

            {/* Image */}
            <div className="relative rounded-[32px] overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src="/images/servicii-v2.webp"
                alt="Primire la Paradisul Copiilor"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Quote */}
            <div className="bg-joy-cream rounded-[28px] p-6 border border-joy-orange/8">
              <p className="font-nunito font-600 text-joy-text-mid text-[16px] leading-relaxed">
                Părinții trebuie să simtă că aici copilul lor este primit cu atenție, implicare și
                energie bună, într-un loc în care se întâmplă lucruri frumoase și relevante pentru vârsta lui.
              </p>
            </div>
          </div>

          {/* RIGHT: Bento blocks */}
          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Large featured block */}
            <div className={`sm:col-span-2 rounded-[28px] p-6 ${BLOCKS[0].bg} border ${BLOCKS[0].border} flex items-center gap-5`}>
              <PremiumIcon
                icon={BLOCKS[0].icon}
                gradient={BLOCKS[0].gradient}
                glow={BLOCKS[0].glow}
                large
              />
              <div>
                <h3 className="font-nunito font-800 text-joy-text-dark text-lg mb-2">{BLOCKS[0].title}</h3>
                <div className="h-1 w-14 rounded-full" style={{ background: BLOCKS[0].gradient }} />
              </div>
            </div>

            {/* Smaller blocks */}
            {BLOCKS.slice(1).map((block, i) => (
              <div
                key={block.title}
                className={`rounded-[24px] p-5 ${block.bg} border ${block.border} flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <PremiumIcon
                  icon={block.icon}
                  gradient={block.gradient}
                  glow={block.glow}
                />
                <h3 className="font-nunito font-800 text-joy-text-dark text-[15px] leading-snug">{block.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
