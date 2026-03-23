const TRUST_ITEMS = [
  { icon: "ri-heart-3-fill",    label: "mediu cald și prietenos",   color: "text-joy-coral"   },
  { icon: "ri-gamepad-fill",    label: "activități variate",         color: "text-joy-yellow"  },
  { icon: "ri-seedling-fill",   label: "educație prin joacă",        color: "text-joy-green"   },
  { icon: "ri-star-fill",       label: "dezvoltare armonioasă",      color: "text-joy-yellow"  },
];

const FLOAT_BADGES = [
  { icon: "ri-palette-fill",   label: "Creativitate", bg: "bg-joy-coral",        delay: "0s",    top: "28%", left: "4%" },
  { icon: "ri-seedling-fill",  label: "Creștere",     bg: "bg-joy-green-dark",   delay: "1.3s",  top: "48%", left: "3%" },
  { icon: "ri-run-fill",       label: "Energie",      bg: "bg-joy-orange",       delay: "2.2s",  top: "65%", left: "5%" },
];

interface HeroProps { onNavClick: (href: string) => void; }

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section id="acasa" className="relative z-[15] min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── PLANE 0: Background image (LCP — eager, not lazy) ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-v3.webp"
          alt="Paradisul Copiilor"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.04)" }}
        />
        {/* Multi-layer atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/28 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-joy-orange-dark/35 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* ── PLANE 1: Ring / Sun system — desktop only to avoid mobile overflow ── */}
      <div className="hidden lg:block absolute pointer-events-none z-10"
        style={{ right: "8%", top: "14%" }}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,209,102,0.22) 0%, transparent 70%)" }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/7 animate-spin-slow"
          style={{ width: 720, height: 720 }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-joy-yellow/8 animate-spin-reverse"
          style={{ width: 520, height: 520 }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full animate-spin-slow"
          style={{ width: 320, height: 320, border: "1.5px dashed rgba(255,209,102,0.15)", animationDuration: "30s" }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ width: 160, height: 160 }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-joy-yellow/20 animate-pulse-ring" />
      </div>

      {/* Bottom-left warm glow — desktop only */}
      <div className="hidden md:block absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.28) 0%, transparent 60%)" }} />

      {/* Floating micro-dots — reduced on mobile */}
      {[
        { top:"22%", left:"18%", size:"w-3 h-3", color:"bg-joy-yellow/55",  anim:"animate-float",      delay:"0s",   mobile: true  },
        { top:"38%", left:"30%", size:"w-2 h-2", color:"bg-white/40",       anim:"animate-float-x",    delay:"1s",   mobile: false },
        { top:"60%", right:"18%",size:"w-4 h-4", color:"bg-joy-coral/45",   anim:"animate-float-alt",  delay:"0.7s", mobile: true  },
        { top:"50%", left:"42%", size:"w-2 h-2", color:"bg-joy-green/50",   anim:"animate-float",      delay:"2.1s", mobile: false },
        { top:"72%", right:"28%",size:"w-3 h-3", color:"bg-white/30",       anim:"animate-float-slow", delay:"1.4s", mobile: false },
      ].map((d, i) => (
        <div key={i}
          className={`absolute rounded-full pointer-events-none z-10 ${d.size} ${d.color} ${d.anim} ${d.mobile ? "" : "hidden sm:block"}`}
          style={{ top: d.top, left: (d as any).left, right: (d as any).right, animationDelay: d.delay }} />
      ))}

      {/* ── PLANE 2: Left-side activity floating badges — desktop only ── */}
      {FLOAT_BADGES.map((badge) => (
        <div key={badge.label}
          className="hidden lg:flex absolute items-center gap-2.5 rounded-full px-4 py-2.5 pointer-events-none z-20 animate-float-slow"
          style={{
            top: badge.top, left: badge.left,
            animationDelay: badge.delay,
            background: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)"
          }}>
          <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${badge.bg}`}>
            <i className={`${badge.icon} text-sm text-white`} />
          </span>
          <span className="font-nunito font-700 text-white text-sm whitespace-nowrap">{badge.label}</span>
        </div>
      ))}

      {/* ── PLANE 3: Main content ── */}
      <div className="relative z-20 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 sm:pt-32 sm:pb-36 lg:pb-44">

        {/* Animated badge */}
        <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-7 animate-fade-in"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "8px 18px"
          }}>
          <span className="w-2 h-2 rounded-full bg-joy-yellow animate-pulse-scale flex-shrink-0" />
          <span className="font-nunito font-700 text-white text-xs sm:text-sm tracking-widest uppercase">
            Grădiniță &amp; centru educațional
          </span>
        </div>

        {/* ── EDITORIAL HEADLINE ── */}
        <h1 className="font-fredoka font-700 leading-none mb-4 sm:mb-5 max-w-5xl w-full">
          <span className="block text-white text-shadow mb-1"
            style={{ fontSize: "clamp(1.75rem, 5.5vw, 6rem)" }}>
            Bucuria copilăriei
          </span>
          <span className="block" style={{ fontSize: "clamp(2.4rem, 8.5vw, 9.5rem)", lineHeight: 0.92 }}>
            <span className="text-outline-white" style={{ fontSize: "inherit" }}>
              începe{" "}
            </span>
            <span className="text-joy-yellow text-shadow-glow" style={{ fontSize: "inherit" }}>
              AICI
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-nunito font-500 text-white/80 max-w-lg leading-relaxed mb-7 sm:mb-10 text-shadow animate-slide-up px-2"
          style={{ fontSize: "clamp(0.9rem, 1.7vw, 1.1rem)", animationDelay: "0.3s" }}>
          La Paradisul Copiilor, copiii cresc prin joacă, descoperire și experiențe
          care îi ajută să învețe cu bucurie, într-un mediu cald, activ și prietenos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none justify-center">
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); onNavClick("#contact"); }}
            className="inline-flex items-center justify-center gap-2.5 text-white font-nunito font-800 px-7 sm:px-8 py-4 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer hover:brightness-110"
            style={{
              fontSize: "1rem",
              background: "linear-gradient(135deg, #FF6B35 0%, #EF476F 100%)",
              boxShadow: "0 10px 36px rgba(255,107,53,0.55), 0 2px 8px rgba(0,0,0,0.18)"
            }}>
            <i className="ri-calendar-check-fill text-base" />
            Programează o vizită
          </a>
          <a href="#despre-noi"
            onClick={(e) => { e.preventDefault(); onNavClick("#despre-noi"); }}
            className="inline-flex items-center justify-center gap-2 font-nunito font-700 px-7 py-4 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer hover:bg-white/25"
            style={{
              fontSize: "1rem",
              color: "white",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.28)"
            }}>
            <i className="ri-compass-3-line text-base" />
            Descoperă grădinița
          </a>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label}
              className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-2"
              style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <i className={`${item.icon} ${item.color} text-sm`} />
              <span className="font-nunito font-600 text-white text-xs sm:text-sm whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Organic bottom separator — z-index above content, below scroll indicator ── */}
      <div className="absolute bottom-0 left-0 right-0 z-25 overflow-hidden pointer-events-none" style={{ height: "72px" }}>
        <div className="absolute bottom-0 left-1/2 bg-white"
          style={{ width: "140%", height: "140px", transform: "translateX(-50%)", borderRadius: "50% 50% 0 0" }} />
      </div>

      {/* Scroll indicator — above the wave */}
      <div className="absolute z-50 animate-bounce" style={{ bottom: "92px" }}>
        <div className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
          <div className="w-1 h-2.5 rounded-full bg-white/65" style={{ animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
