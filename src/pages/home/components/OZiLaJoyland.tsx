import { useScrollReveal } from "../../../hooks/useScrollReveal";

const STEPS = [
  {
    num: "01", icon: "ri-door-open-fill",
    title: "Primire și acomodare", side: "left",
    img: "/images/ozi-s1.webp",
  },
  {
    num: "02", icon: "ri-book-open-fill",
    title: "Activități educaționale", side: "right",
    img: "/images/ozi-s2.webp",
  },
  {
    num: "03", icon: "ri-gamepad-fill",
    title: "Joc și explorare", side: "left",
    img: "/images/ozi-s3.webp",
  },
  {
    num: "04", icon: "ri-restaurant-fill",
    title: "Mese și rutină echilibrată", side: "right",
    img: "/images/ozi-s4.webp",
  },
  {
    num: "05", icon: "ri-scissors-2-fill",
    title: "Activități tematice și creative", side: "left",
    img: "/images/ozi-s5.webp",
  },
  {
    num: "06", icon: "ri-team-fill",
    title: "Socializare și dezvoltare personală", side: "right",
    img: "/images/ozi-s6.webp",
  },
];

export default function OZiLaJoyland() {
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const quoteRef  = useScrollReveal<HTMLDivElement>(0, "sr-scale");

  return (
    <section id="o-zi" className="relative overflow-hidden"
      style={{ background: "linear-gradient(155deg, #FF6B35 0%, #E04F28 55%, #C44020 100%)" }}>

      {/* Atmospheric orbs on orange bg */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(255,209,102,0.15) 0%, transparent 60%)" }} />
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Top organic transition */}
      <div className="h-14 sm:h-20 relative z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] rounded-tl-[50%] rounded-tr-[50%]"
          style={{ height: "100%", background: "linear-gradient(155deg, #FF6B35 0%, #E04F28 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span className="inline-block font-nunito font-700 text-white/55 text-xs uppercase tracking-[0.2em] mb-4">
            Programul zilnic
          </span>
          <h2 className="font-fredoka text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            O zi la{" "}
            <span className="text-joy-yellow text-shadow-glow">Paradisul Copiilor</span>
          </h2>
          <p className="font-nunito font-500 text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.06rem)" }}>
            Fiecare zi este construită astfel încât copilul să simtă că vine într-un loc viu,
            prietenos și plin de descoperiri. Alternăm momentele de joc, activitate,
            interacțiune și învățare.
          </p>
        </div>

        {/* DESKTOP TIMELINE — always visible, no sr classes on items */}
        <div className="hidden md:block relative mb-16">
          {/* Center line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 z-0"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 10%, rgba(255,255,255,0.25) 90%, transparent)" }} />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => {
              const isLeft = step.side === "left";
              return (
                <div key={step.num} className={`flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content + image side */}
                  <div className={`flex-1 flex ${isLeft ? "justify-end pr-14" : "justify-start pl-14"}`}>
                    <div className={`flex items-center gap-4 max-w-sm transition-all duration-300 hover:scale-[1.02] ${isLeft ? "flex-row-reverse" : "flex-row"}`}
                      style={{ animationDelay: `${i * 80}ms` }}>

                      {/* Step image circle */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden"
                        style={{ border: "2px solid rgba(255,255,255,0.35)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                        <img src={step.img} alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover img-zoom" />
                      </div>

                      {/* Icon + Text */}
                      <div className={isLeft ? "text-right" : "text-left"}>
                        <div className={`flex items-center gap-2 mb-1 ${isLeft ? "justify-end" : "justify-start"}`}>
                          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20">
                            <i className={`${step.icon} text-white text-sm`} />
                          </div>
                          <p className="font-nunito font-800 text-white/50 text-xs tracking-widest">{step.num}</p>
                        </div>
                        <h3 className="font-nunito font-800 text-white text-base sm:text-lg leading-snug">{step.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-5 h-5 rounded-full bg-joy-yellow"
                      style={{ boxShadow: "0 0 0 5px rgba(255,209,102,0.25)" }} />
                  </div>

                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE TIMELINE */}
        <div className="md:hidden flex flex-col gap-5 mb-12 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 5%, rgba(255,255,255,0.25) 95%, transparent)" }} />
          {STEPS.map((step) => (
            <div key={step.num} className="flex items-center gap-4 relative z-10">
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
                <img src={step.img} alt={step.title} loading="lazy"
                  className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <i className={`${step.icon} text-white/70 text-xs`} />
                  <p className="font-nunito font-800 text-white/45 text-xs">{step.num}</p>
                </div>
                <h3 className="font-nunito font-800 text-white text-[15px] leading-snug">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div ref={quoteRef}
          className="max-w-3xl mx-auto rounded-[32px] px-7 sm:px-10 py-7 text-center"
          style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
          <div className="w-8 h-8 flex items-center justify-center mx-auto mb-3">
            <i className="ri-chat-quote-fill text-3xl text-white/20" />
          </div>
          <p className="font-nunito font-600 text-white/78 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.06rem)" }}>
            Copiii au nevoie atât de structură, cât și de libertatea de a explora. De aceea, ziua lor
            trebuie să fie echilibrată, activă și potrivită etapei în care se află.
          </p>
        </div>
      </div>

      {/* Bottom organic separator */}
      <div className="h-14 sm:h-20 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] bg-white"
          style={{ height: "100%", borderRadius: "0 0 50% 50%" }} />
      </div>
    </section>
  );
}
