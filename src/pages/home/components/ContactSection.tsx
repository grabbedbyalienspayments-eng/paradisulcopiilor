import { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import FAQ from "./FAQ";

const SUBMIT_URL = "https://readdy.ai/api/form/d6upift1l1ubpb129840";

const CONTACT_ITEMS = [
  { icon: "ri-phone-fill", label: "Telefon", value: "+40 7XX XXX XXX", href: "tel:+407XXXXXXXX", color: "text-joy-green-dark", bg: "bg-joy-green/12" },
  { icon: "ri-mail-fill", label: "Email", value: "contact@joyland.ro", href: "mailto:contact@joyland.ro", color: "text-joy-orange", bg: "bg-joy-orange/10" },
  { icon: "ri-map-pin-2-fill", label: "Adresă", value: "Adresa completă, Orașul, România", href: "https://maps.google.com", color: "text-joy-coral", bg: "bg-joy-coral/10" },
  { icon: "ri-whatsapp-fill", label: "WhatsApp", value: "Scrie-ne pe WhatsApp", href: "https://wa.me/407XXXXXXXX", color: "text-joy-green-dark", bg: "bg-joy-green/12" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [msgLen, setMsgLen] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>(0, "sr");
  const leftRef = useScrollReveal<HTMLDivElement>(0, "sr-left");
  const rightRef = useScrollReveal<HTMLDivElement>(150, "sr-right");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot check — if filled, silently discard (bot detected)
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
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ */}
        <div className="mb-20">
          <FAQ />
        </div>

        {/* Contact header */}
        <div ref={headerRef} className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block font-nunito font-700 text-joy-orange text-xs uppercase tracking-[0.2em] mb-4">
            Vizitează-ne
          </span>
          <h2 className="font-fredoka leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Hai să ne <span className="text-joy-orange">cunoaștem</span>
          </h2>
          <p className="font-nunito font-500 text-joy-text-mid text-[17px] leading-relaxed">
            Cel mai bun mod de a înțelege dacă Paradisul Copiilor este potrivit pentru copilul
            tău este să ne vizitezi. Te invităm să descoperi direct atmosfera, spațiul și energia locului.
          </p>
        </div>

        {/* Split grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: contact details */}
          <div ref={leftRef} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href}
                  target={["ri-map-pin-2-fill","ri-whatsapp-fill"].includes(item.icon) ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-[24px] px-5 py-4 ${item.bg} border border-white/50 cursor-pointer transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-white"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                    <i className={`${item.icon} text-lg ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-nunito font-600 text-joy-text-light text-xs">{item.label}</p>
                    <p className="font-nunito font-700 text-joy-text-dark text-sm leading-tight truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps embed — replace src with actual address when ready */}
            <div className="rounded-[32px] overflow-hidden w-full border border-joy-orange/10"
              style={{ height: "256px" }}>
              <iframe
                title="Locație Paradisul Copiilor"
                src="https://maps.google.com/maps?q=Bucharest,Romania&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="flex items-center gap-3 mt-1">
              <a href="https://maps.google.com/?q=Bucharest,Romania" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-joy-orange text-white font-nunito font-700 text-sm px-5 py-2.5 rounded-full cursor-pointer hover:bg-joy-orange-dark transition-colors whitespace-nowrap"
                style={{ minHeight: 0 }}>
                <i className="ri-map-pin-2-fill text-sm" />
                Deschide în Google Maps
              </a>
            </div>

            <div className="rounded-[24px] bg-joy-cream px-6 py-5 border border-joy-orange/8">
              <p className="font-nunito font-500 text-joy-text-mid text-sm leading-relaxed">
                <strong className="text-joy-text-dark">Programul nostru</strong> se stabilește la vizită sau
                prin contact direct. Suntem deschiși întrebărilor și îți răspundem cu drag.
              </p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div ref={rightRef}
            className="rounded-[36px] p-7 sm:p-10"
            style={{
              background: "linear-gradient(160deg, #FFFAF5 0%, #FFF3E8 100%)",
              border: "1px solid rgba(255,107,53,0.1)",
              boxShadow: "0 16px 60px rgba(255,107,53,0.1)"
            }}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-joy-green/12 mx-auto mb-4">
                  <i className="ri-checkbox-circle-fill text-3xl text-joy-green-dark" />
                </div>
                <h3 className="font-fredoka text-2xl text-joy-text-dark mb-3">Cerere trimisă!</h3>
                <p className="font-nunito font-500 text-joy-text-mid text-[15px]">Te contactăm în cel mai scurt timp.</p>
              </div>
            ) : (
              <>
                <h3 className="font-fredoka text-2xl text-joy-text-dark mb-7">Programează o vizită</h3>
                <form id="form-vizita" data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Honeypot — hidden from humans, traps bots */}
                  <div className="hp-field" aria-hidden="true">
                    <label htmlFor="hp-website">Website</label>
                    <input id="hp-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-nunito font-600 text-joy-text-dark text-sm">Nume *</label>
                      <input name="name" type="text" required placeholder="Prenume Nume"
                        className="rounded-xl border border-joy-orange/15 bg-white px-4 py-3 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-nunito font-600 text-joy-text-dark text-sm">Email *</label>
                      <input name="email" type="email" required placeholder="email@exemplu.ro"
                        className="rounded-xl border border-joy-orange/15 bg-white px-4 py-3 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-nunito font-600 text-joy-text-dark text-sm">Telefon</label>
                      <input name="telefon" type="tel" placeholder="+40 7XX XXX XXX"
                        className="rounded-xl border border-joy-orange/15 bg-white px-4 py-3 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-nunito font-600 text-joy-text-dark text-sm">Dată preferată</label>
                      <input name="data_vizita" type="date"
                        className="rounded-xl border border-joy-orange/15 bg-white px-4 py-3 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-nunito font-600 text-joy-text-dark text-sm">Mesaj (opțional)</label>
                      <span className="text-xs text-joy-text-light font-nunito">{msgLen}/500</span>
                    </div>
                    <textarea name="mesaj" maxLength={500} rows={4}
                      placeholder="Spune-ne ceva despre copilul tău sau întrebările tale..."
                      onChange={(e) => setMsgLen(e.target.value.length)}
                      className="rounded-xl border border-joy-orange/15 bg-white px-4 py-3 text-sm font-nunito focus:outline-none focus:border-joy-orange transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 text-white font-nunito font-800 text-base py-4 rounded-full whitespace-nowrap transition-all cursor-pointer hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #FF6B35, #EF476F)", boxShadow: "0 8px 28px rgba(255,107,53,0.35)" }}>
                    <i className="ri-calendar-check-fill w-5 h-5 flex items-center justify-center" />
                    Programează o vizită
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
