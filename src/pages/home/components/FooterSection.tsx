import { useState, Fragment } from "react";

type LegalModal = "privacy" | "cookies" | "terms" | null;

const NAV_LINKS = [
  { label: "Acasă", href: "#acasa" },
  { label: "Despre noi", href: "#despre-noi" },
  { label: "Oferta educațională", href: "#oferta" },
  { label: "O zi la grădiniță", href: "#o-zi" },
  { label: "Grupe", href: "#grupe" },
  { label: "Taxe", href: "#taxe" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

const PRIVACY = `POLITICA DE CONFIDENȚIALITATE — Paradisul Copiilor\nUltima actualizare: ${new Date().getFullYear()}\n\nParadisul Copiilor respectă confidențialitatea vizitatorilor și a clienților săi.\n\nDATE COLECTATE\nColectăm datele furnizate voluntar prin formularul de contact (nume, email, telefon, mesaj). Nu colectăm date fără consimțământ explicit.\n\nSCOPUL PRELUCRĂRII\nDatele sunt utilizate exclusiv pentru a răspunde solicitărilor de vizită și informații. Nu sunt utilizate în scopuri de marketing fără consimțământ.\n\nSTOCAREA DATELOR\nDatele sunt stocate în condiții de securitate. Nu partajăm datele cu terți cu excepția situațiilor prevăzute de lege.\n\nDREPTURILE TALE\nAi dreptul de acces, rectificare, ștergere și portabilitate a datelor. Ne poți contacta oricând.`;

const COOKIES = `POLITICA COOKIES — Paradisul Copiilor\nUltima actualizare: ${new Date().getFullYear()}\n\nAcest site folosește un număr minim de cookie-uri necesare funcționării tehnice. Nu folosim cookie-uri de tracking, analytics sau marketing.\n\nTIPURI DE COOKIE-URI\nCookie-uri strict necesare: necesare funcționării de bază a site-ului.\n\nNu instalăm cookie-uri de:\n— Analytics sau urmărire comportamentală\n— Reclame sau retargeting\n— Rețele sociale\n\nCONSIMȚĂMÂNT\nPrin utilizarea site-ului, accepți utilizarea cookie-urilor strict necesare.`;

const TERMS = `TERMENI ȘI CONDIȚII — Paradisul Copiilor\nUltima actualizare: ${new Date().getFullYear()}\n\nUTILIZAREA SITE-ULUI\nAcest site este destinat informării părinților interesați de serviciile Paradisul Copiilor. Conținutul este furnizat cu titlu informativ.\n\nPROPRIETATE INTELECTUALĂ\nToate textele, imaginile și elementele grafice sunt proprietatea Paradisul Copiilor. Reproducerea fără permisiune este interzisă.\n\nRĂSPUNDERE\nParadisul Copiilor nu își asumă răspunderea pentru utilizarea incorectă a informațiilor sau pentru erori tehnice temporare.\n\nLEGISLAȚIE APLICABILĂ\nAcești termeni sunt guvernați de legislația română în vigoare.`;

interface ModalProps { type: LegalModal; onClose: () => void; }

function LegalModal({ type, onClose }: ModalProps) {
  if (!type) return null;
  const titles: Record<NonNullable<LegalModal>, string> = {
    privacy: "Politica de Confidențialitate",
    cookies: "Politica Cookies",
    terms: "Termeni și Condiții",
  };
  const contents: Record<NonNullable<LegalModal>, string> = { privacy: PRIVACY, cookies: COOKIES, terms: TERMS };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}>
      <div className="bg-white rounded-[32px] max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white rounded-t-[32px] flex items-center justify-between px-7 py-5 border-b border-joy-orange/10">
          <h3 className="font-fredoka text-xl text-joy-text-dark">{titles[type]}</h3>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-joy-cream hover:bg-joy-orange/10 text-joy-text-mid cursor-pointer transition-colors"
            onClick={onClose} aria-label="Închide">
            <i className="ri-close-line text-lg" />
          </button>
        </div>
        <div className="px-7 py-6 flex flex-col gap-3">
          {contents[type].split("\n").map((line, i) => {
            if (!line.trim()) return <div key={i} className="h-1" />;
            if (line === line.toUpperCase() && line.trim().length > 4) {
              return <h4 key={i} className="font-nunito font-800 text-joy-text-dark text-sm mt-2">{line}</h4>;
            }
            return <p key={i} className="font-nunito font-500 text-joy-text-mid text-sm leading-relaxed">{line}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default function FooterSection() {
  const [modal, setModal] = useState<LegalModal>(null);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <>
      <footer style={{ background: "linear-gradient(165deg, #FFF3E8 0%, #FFE8D4 50%, #FFF3E8 100%)" }}>
        {/* Top separator */}
        <div className="h-12 overflow-hidden">
          <div className="h-full bg-white rounded-bl-[50%] rounded-br-[50%] mx-auto" style={{ width: "120%" }} />
        </div>

        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img
              src="/images/10045bac26c7.webp"
              alt="Paradisul Copiilor"
              className="h-14 w-auto object-contain object-left"
            />
            <p className="font-nunito font-500 text-joy-text-mid text-sm leading-relaxed max-w-xs">
              Grădiniță și centru educațional unde copiii cresc prin joacă,
              bucurie și experiențe reale de zi cu zi.
            </p>
            {/* Social icons — explicit size override for square shape */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-joy-orange/12 text-joy-orange hover:bg-joy-orange hover:text-white transition-all cursor-pointer"
                style={{ width: "40px", height: "40px", flexShrink: 0, minHeight: 0 }}>
                <i className="ri-facebook-fill text-base" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-joy-orange/12 text-joy-orange hover:bg-joy-orange hover:text-white transition-all cursor-pointer"
                style={{ width: "40px", height: "40px", flexShrink: 0, minHeight: 0 }}>
                <i className="ri-instagram-line text-base" />
              </a>
              <a href="https://wa.me/407XXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-joy-green/15 text-joy-green-dark hover:bg-joy-green hover:text-white transition-all cursor-pointer"
                style={{ width: "40px", height: "40px", flexShrink: 0, minHeight: 0 }}>
                <i className="ri-whatsapp-fill text-base" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-nunito font-800 text-joy-text-dark text-xs uppercase tracking-[0.15em] mb-5">
              Navigare
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => scrollTo(e, link.href)}
                  className="font-nunito font-500 text-joy-text-mid text-sm hover:text-joy-orange transition-colors cursor-pointer">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nunito font-800 text-joy-text-dark text-xs uppercase tracking-[0.15em] mb-5">
              Contact rapid
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+407XXXXXXXX" className="flex items-center gap-2.5 text-joy-text-mid hover:text-joy-orange transition-colors cursor-pointer">
                <i className="ri-phone-fill text-joy-orange text-sm w-4 h-4 flex items-center justify-center" />
                <span className="font-nunito font-500 text-sm">+40 7XX XXX XXX</span>
              </a>
              <a href="mailto:contact@joyland.ro" className="flex items-center gap-2.5 text-joy-text-mid hover:text-joy-orange transition-colors cursor-pointer">
                <i className="ri-mail-fill text-joy-orange text-sm w-4 h-4 flex items-center justify-center" />
                <span className="font-nunito font-500 text-sm">contact@joyland.ro</span>
              </a>
              <div className="flex items-start gap-2.5 text-joy-text-mid">
                <i className="ri-map-pin-2-fill text-joy-orange text-sm w-4 h-4 flex items-center justify-center mt-0.5" />
                <span className="font-nunito font-500 text-sm">Adresa completă, Orașul, România</span>
              </div>
              <a href="https://wa.me/407XXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 bg-joy-green/15 text-joy-green-dark font-nunito font-700 text-sm px-4 py-2 rounded-full hover:bg-joy-green hover:text-white transition-all cursor-pointer whitespace-nowrap mt-1">
                <i className="ri-whatsapp-fill w-4 h-4 flex items-center justify-center" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,107,53,0.15)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-nunito font-500 text-joy-text-light text-xs">
              © {new Date().getFullYear()} Paradisul Copiilor. Toate drepturile rezervate.
            </p>
            {/* Legal links — using Fragment to avoid key/duplicate-dot issue */}
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              {(["privacy", "cookies", "terms"] as const).map((key, i) => (
                <Fragment key={key}>
                  {i > 0 && <span className="text-joy-orange/30 text-xs select-none">·</span>}
                  <button onClick={() => setModal(key)}
                    className="font-nunito font-500 text-joy-text-light text-xs hover:text-joy-orange transition-colors cursor-pointer whitespace-nowrap"
                    style={{ minHeight: 0, background: "none", border: "none" }}>
                    {key === "privacy" ? "Confidențialitate" : key === "cookies" ? "Cookies" : "Termeni"}
                  </button>
                </Fragment>
              ))}
              <span className="text-joy-orange/30 text-xs select-none">·</span>
              <a href="https://websiteon.ro/" target="_blank" rel="noopener noreferrer"
                className="font-nunito font-500 text-joy-text-light text-xs hover:text-joy-orange transition-colors cursor-pointer whitespace-nowrap"
                style={{ minHeight: 0 }}>
                Website de <strong>WebsiteON</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={modal} onClose={() => setModal(null)} />
    </>
  );
}
