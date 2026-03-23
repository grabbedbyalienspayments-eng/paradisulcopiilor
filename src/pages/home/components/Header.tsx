import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Acasă",                 href: "#acasa"      },
  { label: "Despre noi",            href: "#despre-noi" },
  { label: "Oferta educațională",   href: "#oferta"     },
  { label: "O zi la grădiniță",     href: "#o-zi"       },
  { label: "Grupe",                 href: "#grupe"      },
  { label: "Taxe",                  href: "#taxe"       },
  { label: "Galerie",               href: "#galerie"    },
  { label: "Contact",               href: "#contact"    },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-joy-cream/96 backdrop-blur-md"
          : "py-4 bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid rgba(255,107,53,0.1)" } : {}}
    >
      {/* Top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-joy-yellow via-joy-orange to-joy-coral" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" onClick={scrollToTop} className="flex-shrink-0 cursor-pointer group">
          <img
            src="/images/10045bac26c7.webp"
            alt="Paradisul Copiilor"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className={`relative font-nunito font-700 text-sm px-3 py-2 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer group ${
                scrolled
                  ? "text-joy-text-dark hover:text-joy-orange"
                  : "text-white/90 hover:text-white text-shadow-sm"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 rounded-full bg-joy-orange/0 group-hover:bg-joy-orange/10 transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-joy-orange hover:bg-joy-orange-dark text-white font-nunito font-800 text-sm px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer"
            style={{ boxShadow: "0 4px 20px rgba(255,107,53,0.35)", minHeight: 0 }}
          >
            <i className="ri-calendar-line text-sm" />
            Programează o vizită
          </a>

          {/* Burger button — inline SVG for guaranteed visibility */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
              scrolled ? "bg-joy-orange/10 hover:bg-joy-orange/20" : "bg-white/15 hover:bg-white/25"
            }`}
            style={{ width: "44px", height: "44px", minHeight: 0, flexShrink: 0 }}
            aria-label={menuOpen ? "Închide meniu" : "Deschide meniu"}
          >
            {menuOpen ? (
              /* X close icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                className={scrolled ? "text-joy-text-dark" : "text-white"}>
                <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true"
                className={scrolled ? "text-joy-text-dark" : "text-white"}>
                <path d="M1 1h20M1 9h20M1 17h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — high contrast dark text on white */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-joy-orange/10 px-4 py-5 shadow-lg">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="font-nunito font-700 text-[16px] text-joy-text-dark px-5 py-3.5 rounded-2xl hover:bg-joy-orange/10 hover:text-joy-orange transition-all cursor-pointer"
                style={{ minHeight: 0 }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="mt-3 flex items-center justify-center gap-2 bg-joy-orange text-white font-nunito font-800 text-base px-5 py-3.5 rounded-full whitespace-nowrap cursor-pointer hover:bg-joy-orange-dark transition-colors"
              style={{ minHeight: 0 }}
            >
              <i className="ri-calendar-line text-base" />
              Programează o vizită
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
