import { useEffect, useState } from "react";
import { CONFIG } from "../data.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const imgs = CONFIG.gallery;

export default function Gallery() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const key = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % imgs.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);

  const cell = "aspect-[4/5] border border-2 border-gold bg-gold/10 flex items-center justify-center text-muted text-[.85rem] overflow-hidden";
  return (
    <div className="md:max-w-[80%] mx-auto px-5 text-center">
      <h2 className="font-head font-normal text-gold2 text-[1.45rem] leading-[1.7] m-0">កម្រងរូបភាពអនុស្សាវរីយ៍</h2>
      <p className="font-en italic text-muted text-xl mb-7">Our moments</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {Array.from({ length: imgs.length }, (_, i) => (
          <Reveal key={i} delay={(i % 3) * 120}>
            {imgs[i] ? (
              <button onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`} className={`${cell} w-full p-0 cursor-zoom-in`}>
                <img src={imgs[i]} alt={`Photo ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </button>
            ) : <div className={cell}>រូបភាព · Photo</div>}
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div className="fadein fixed inset-0 z-40 bg-black/90 flex items-center justify-center" onClick={() => setOpen(null)}>
          <img src={imgs[open]} alt={`Photo ${open + 1}`} className="max-w-[94vw] max-h-[86svh] object-contain border border-gold" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute top-4 right-4 text-gold2 text-3xl cursor-pointer">×</button>
          {imgs.length > 1 && <>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + imgs.length) % imgs.length); }} className="absolute left-3 text-gold2 text-4xl cursor-pointer">‹</button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % imgs.length); }} className="absolute right-3 text-gold2 text-4xl cursor-pointer">›</button>
          </>}
        </div>
      )}
    </div>
  );
}
