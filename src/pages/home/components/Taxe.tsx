import { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const SUBMIT_URL = "https://readdy.ai/api/form/d6upift1l1ubpb12984g";

const PACKAGES = [
  {
    icon: "ri-time-fill",
    iconGradient: "linear-gradient(135deg, #FFD166 0%, #FFBA00 100%)",
    iconGlow: "rgba(255,209,102,0.6)",
    name: "Program parțial",
    accent: "border-t-4 border-joy-yellow",
    includes: ["Activități educative și creative", "Jocuri și momente de grup", "Masă de prânz"],
    detalii: "Program dimineață — orar stabilit la înscriere",
    featured: false,
  },
  {
    icon: "ri-star-s-fill",
    iconGradient: "linear-gradient(135deg, #FF6B35 0%, #E5502A 100%)",
    iconGlow: "rgba(255,107,53,0.5)",
    name: "Program complet",
    accent: "border-t-4 border-joy-orange",
    includes: ["Program educațional complet", "Toate activitățile zilnice", "Mese și gustări incluse", "Activități tematice și creative"],
    detalii: "Program extins — orar complet, adaptat familiei",
    featured: true,
  },
  {
    icon: "ri-magic-fill",
    iconGradient: "linear-gradient(135deg, #5AA85D 0%, #3D9140 100%)",
    iconGlow: "rgba(90,168,93,0.5)",
    name: "Program adaptat",
    accent: "border-t-4 border-joy-green",
    includes: ["Orar flexibil personalizat", "Activități selective", "Adaptat nevoilor familiei"],
    detalii: "Discutăm direct pentru a găsi varianta potrivită",
    featured: false,
  },
];

export default function Taxe() {
  const [submitted, setSubmitted] = useState(false);
  const [msgLen, setMsgLen] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const cardsRef = useScrollReveal<HTMLDivElement>(100, "sr");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot check — bot trap
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    const data = new URLSearchParams();
    new FormData(form).forEach((val, key) => {
      if (key !== "website") data.append(key, val.toString());
    });
    try {
      await fetch(SUBMIT_URL, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
      setSubmitted(true);
    } catch { /* silent */ }
  };

  return (
    <section id="taxe" className="py-20 sm:py-28"
      style={{ background: "linear-gradient(165deg, #FFFAF5 0%, #FFF3E8 50%, #FFFAF5 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Informații administrative
          </span>
          <h2 className="font-fredoka leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Taxe și <span className="text-joy-orange">informații utile</span>
          </h2>
          <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
            Informații clare, curate și ușor de înțeles. Fără birocrație inutilă.
          </p>
        </div>

        {/* Packages */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.name}
              className={`relative rounded-[36px] flex flex-col overflow-hidden ${pkg.accent} transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: pkg.featured ? "linear-gradient(150deg, #FF6B35 0%, #E5502A 100%)" : "#fff",
                transitionDelay: `${i * 80}ms`,
                boxShadow: pkg.featured ? "0 20px 60px rgba(255,107,53,0.3)" : "0 4px 24px rgba(0,0,0,0.05)"
              }}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 left-0 h-full pointer-events-none"
                  style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 50%)" }} />
              )}
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-joy-yellow text-joy-orange-dark font-nunito font-800 text-xs px-3 py-1 rounded-full">
                  Recomandat
                </div>
              )}

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-3">
                  {/* Premium icon container */}
                  <div
                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl relative overflow-hidden"
                    style={{
                      background: pkg.featured ? "rgba(255,255,255,0.2)" : pkg.iconGradient,
                      boxShadow: pkg.featured
                        ? "0 4px 20px rgba(255,255,255,0.25)"
                        : `0 8px 24px ${pkg.iconGlow}`,
                    }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.25) 0%, transparent 60%)" }}
                    />
                    <i className={`${pkg.icon} text-2xl relative z-10 ${pkg.featured ? "text-white" : "text-white"}`} />
                  </div>
                  <h3 className={`font-nunito font-800 text-lg ${pkg.featured ? "text-white" : "text-joy-text-dark"}`}>
                    {pkg.name}
                  </h3>
                </div>

                {/* Taxa */}
                <div className={`rounded-2xl px-4 py-3 text-center ${pkg.featured ? "bg-white/15" : "bg-joy-cream"}`}>
                  <p className={`font-nunito font-600 text-xs mb-1 ${pkg.featured ? "text-white/60" : "text-joy-text-light"}`}>
                    Taxă lunară
                  </p>
                  <p className={`font-fredoka text-2xl ${pkg.featured ? "text-joy-yellow" : "text-joy-orange"}`}>
                    La cerere
                  </p>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <i className={`ri-check-line text-sm mt-0.5 flex-shrink-0 ${pkg.featured ? "text-joy-yellow" : "text-joy-green-dark"}`} />
                      <span className={`font-nunito font-500 text-sm ${pkg.featured ? "text-white/85" : "text-joy-text-mid"}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={`font-nunito text-xs leading-relaxed pt-3 border-t ${pkg.featured ? "border-white/15 text-white/50" : "border-joy-orange/8 text-joy-text-light"}`}>
                  {pkg.detalii}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support + form */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="font-nunito font-500 text-joy-text-mid text-[16px] leading-relaxed mb-6">
            Pentru detalii complete despre disponibilitate, costuri și pașii de înscriere,
            recomandăm programarea unei vizite sau contactul direct.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-[32px] p-7 sm:p-9"
          style={{ boxShadow: "0 8px 40px rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.1)" }}>
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-joy-green/12 mx-auto mb-3">
                <i className="ri-checkbox-circle-fill text-3xl text-joy-green-dark" />
              </div>
              <h3 className="font-fredoka text-xl text-joy-text-dark mb-2">Mesaj trimis!</h3>
              <p className="font-nunito font-500 text-joy-text-mid text-sm">Îți vom răspunde cu detalii complete cât mai curând.</p>
            </div>
          ) : (
            <>
              <h3 className="font-fredoka text-xl text-joy-text-dark mb-5 text-center">Solicită detalii</h3>
              <form id="form-detalii" data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot — hidden from humans, traps bots */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="hp-website-d">Website</label>
                  <input id="hp-website-d" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-nunito font-600 text-joy-text-dark text-sm">Nume *</label>
                    <input name="name" type="text" required placeholder="Prenume Nume"
                      className="rounded-xl border border-joy-orange/15 bg-joy-cream px-4 py-2.5 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-nunito font-600 text-joy-text-dark text-sm">Email *</label>
                    <input name="email" type="email" required placeholder="email@exemplu.ro"
                      className="rounded-xl border border-joy-orange/15 bg-joy-cream px-4 py-2.5 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-nunito font-600 text-joy-text-dark text-sm">Telefon</label>
                  <input name="telefon" type="tel" placeholder="+40 7XX XXX XXX"
                    className="rounded-xl border border-joy-orange/15 bg-joy-cream px-4 py-2.5 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="font-nunito font-600 text-joy-text-dark text-sm">Mesaj</label>
                    <span className="text-xs text-joy-text-light font-nunito">{msgLen}/500</span>
                  </div>
                  <textarea name="mesaj" maxLength={500} rows={3}
                    placeholder="Scrie întrebarea ta..."
                    onChange={(e) => setMsgLen(e.target.value.length)}
                    className="rounded-xl border border-joy-orange/15 bg-joy-cream px-4 py-2.5 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-joy-orange hover:bg-joy-orange-dark text-white font-nunito font-800 text-base py-3.5 rounded-full whitespace-nowrap transition-all cursor-pointer"
                  style={{ boxShadow: "0 6px 24px rgba(255,107,53,0.3)" }}>
                  Solicită detalii
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
