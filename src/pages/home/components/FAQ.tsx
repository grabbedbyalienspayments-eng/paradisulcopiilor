import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Pot programa o vizită înainte de înscriere?",
    a: "Absolut! De fapt, îți recomandăm să ne vizitezi înainte de orice decizie. Vrei să simți direct atmosfera, să cunoști echipa și să înțelegi cum arată o zi la Paradisul Copiilor. Scrie-ne sau sună-ne și stabilim împreună o dată potrivită.",
  },
  {
    q: "Cum aflu detalii despre taxe și program?",
    a: "Cel mai rapid mod este să ne contactezi direct — prin telefon, email sau WhatsApp. Îți oferim toate informațiile clare și transparente, incluzând programul, pachetele disponibile și pașii de înscriere.",
  },
  {
    q: "Copiii sunt organizați pe grupe?",
    a: "Da. Copiii sunt organizați în grupă mică, mijlocie și mare, în funcție de etapa lor de dezvoltare. Această structură ne ajută să adaptăm activitățile, ritmul și interacțiunile pentru fiecare vârstă.",
  },
  {
    q: "Ce tip de activități desfășurați?",
    a: "Activitățile noastre combină jocul, creația, mișcarea, comunicarea și momentele tematice. Nu urmărim să ocupăm timpul, ci să oferim experiențe reale care contribuie la dezvoltarea naturală a copilului.",
  },
  {
    q: "Cum pot lua legătura cu voi?",
    a: "Ne poți contacta prin telefon, email sau WhatsApp — toate detaliile le găsești în secțiunea Contact de pe această pagină. Suntem deschiși la întrebări și îți răspundem cât mai rapid.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block font-nunito font-700 text-joy-orange text-sm uppercase tracking-widest mb-3">
          Întrebări frecvente
        </span>
        <h2 className="font-fredoka font-700 text-3xl sm:text-4xl text-joy-text-dark">
          Răspunsuri rapide
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-joy-orange/30 bg-white"
                  : "border-joy-orange/10 bg-joy-cream hover:border-joy-orange/25"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                style={{ minHeight: 0 }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="font-nunito font-700 text-joy-text-dark text-[15px] sm:text-base leading-snug">
                  {item.q}
                </span>
                {/* Clear +/- icon with solid background */}
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${
                    isOpen
                      ? "bg-joy-orange border-joy-orange text-white"
                      : "bg-white border-joy-orange text-joy-orange"
                  }`}
                  style={{ minWidth: "2rem" }}
                >
                  {isOpen ? (
                    /* Minus symbol */
                    <span className="block w-3.5 h-0.5 bg-white rounded-full" />
                  ) : (
                    /* Plus symbol */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="font-nunito font-500 text-joy-text-mid text-[15px] leading-relaxed border-t border-joy-orange/10 pt-4">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
