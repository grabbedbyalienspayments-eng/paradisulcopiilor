import { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const HERO_IMG = "/images/gal-hero.webp";

const PHOTOS = [
  { src: "/images/g1v3.webp", alt: "Activități creative", featured: true },
  { src: "/images/g2v3.webp", alt: "Moment de poveste" },
  { src: "/images/g3v3.webp", alt: "Joc liber" },
  { src: "/images/g4v3.webp", alt: "Masa de prânz", featured: true },
  { src: "/images/g5v3.webp", alt: "Mișcare și dans" },
  { src: "/images/g6v3.webp", alt: "Atelier tematic" },
  { src: "/images/g7v3.webp", alt: "Primire dimineața" },
  { src: "/images/g8v3.webp", alt: "Joacă afară", featured: true },
];

export default function Galerie() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const heroRef   = useScrollReveal<HTMLDivElement>(0, "sr-scale");

  return (
    <section id="galerie" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-joy-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Atmosfera noastră
          </span>
          <h2 className="font-fredoka leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Momente din universul{" "}
            <span className="text-joy-orange">Paradisului Copiilor</span>
          </h2>
          <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
            Copii implicați, activități reale, energie bună — exact ceea ce cauți.
          </p>
        </div>

        {/* CINEMATIC HERO IMAGE */}
        <div ref={heroRef}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden mb-4 sm:mb-5 cursor-pointer group"
          style={{ height: "clamp(180px, 32vw, 480px)" }}
          onClick={() => setLightbox(HERO_IMG)}>
          <img src={HERO_IMG} alt="Lumea Paradisului Copiilor" loading="lazy" decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-[1.2s] ease-in-out"
            style={{ willChange: "transform" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          {/* Overlay label — hidden on very small screens */}
          <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <i className="ri-expand-diagonal-line text-white text-xs sm:text-sm" />
            </div>
            <span className="hidden sm:block font-nunito font-700 text-white text-sm text-shadow-sm">
              Lumea Paradisului Copiilor
            </span>
          </div>
          {/* Decorative corner badge */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-joy-orange/90 backdrop-blur-sm text-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1">
            <i className="ri-image-2-fill text-xs" />
            <span className="font-nunito font-700 text-xs">Galerie</span>
          </div>
        </div>

        {/* CSS MASONRY — responsive Tailwind columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <div key={photo.src}
              className="break-inside-avoid mb-3 sm:mb-4 group cursor-pointer relative overflow-hidden rounded-[20px] sm:rounded-[24px] block"
              onClick={() => setLightbox(photo.src)}
              style={{ transitionDelay: `${i * 40}ms` }}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.07]" />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-3 sm:p-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
                    <i className="ri-zoom-in-line text-white text-xs" />
                  </div>
                  <span className="font-nunito font-700 text-white text-xs">{photo.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.90)", backdropFilter: "blur(14px)" }}
          onClick={() => setLightbox(null)}>

          {/* Bold visible close button */}
          <button
            className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-white text-joy-text-dark cursor-pointer transition-all hover:bg-joy-yellow hover:scale-110 z-10"
            style={{ width: "48px", height: "48px", minHeight: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Închide">
            {/* Inline SVG X — zero dependency on icon CDN */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

          <img src={lightbox} alt=""
            className="max-w-full max-h-[88vh] rounded-[24px] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
