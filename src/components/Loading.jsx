import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../data.js";

const MIN_MS = 1600;   // show the loading page at least this long
const MAX_MS = 7000;   // never make guests wait longer than this
const kh = (n) => String(n).replace(/\d/g, (d) => "០១២៣៤៥៦៧៨៩"[d]);

// pick the photo for this screen size (same rule as Opening / Cover)
const pick = (set = {}, single) => {
  const w = window.innerWidth;
  const m = set.mobile || single, t = set.tablet || m, d = set.desktop || t;
  return w >= 1024 ? d : w >= 640 ? t : m;
};
const loadImage = (src) => new Promise((res) => { const i = new Image(); i.onload = i.onerror = res; i.src = src; });
const loadFonts = () => Promise.all([
  document.fonts.load('1em Moul', "សុធា"), document.fonts.load('1em Moulpali', "សុធា"),
  document.fonts.load('1em Battambang', "ក"), document.fonts.load('1em "Great Vibes"', "A"),
  document.fonts.load('1em "Cormorant Garamond"', "A"),
]).then(() => document.fonts.ready).catch(() => {});

export default function Loading() {
  const [done, setDone] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const total = useRef(0);

  useEffect(() => {
    const photos = [...new Set([
      pick(CONFIG.openingPhotos, CONFIG.openingPhoto),
      pick(CONFIG.coverBackgrounds, CONFIG.coverBackground || CONFIG.coverPhoto),
    ].filter(Boolean))];
    const tasks = [loadFonts(), ...photos.map(loadImage), new Promise((r) => setTimeout(r, MIN_MS))];
    total.current = tasks.length;
    let finished = false;
    const finish = () => { if (finished) return; finished = true; setLeaving(true); setTimeout(() => setGone(true), 700); };
    tasks.forEach((t) => t.then(() => setDone((d) => d + 1)));
    Promise.all(tasks).then(finish);
    const cap = setTimeout(finish, MAX_MS);
    return () => clearTimeout(cap);
  }, []);

  if (gone) return null;
  const pct = leaving ? 100 : Math.round((done / (total.current || 3)) * 100);

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center px-6 text-center bg-ruby transition-opacity duration-700 ${leaving ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      role="status" aria-live="polite" aria-label="Loading">
      <div className="relative w-24 h-24 mb-6">
        <svg viewBox="0 0 100 100" fill="none" stroke="#d4a94f" className="absolute inset-0 animate-[spin_9s_linear_infinite] motion-reduce:animate-none">
          <path d="M50 4l46 46-46 46L4 50z" strokeWidth="1.5" />
          <path d="M50 16l34 34-34 34-34-34z" strokeWidth="1" strokeOpacity=".6" />
        </svg>
        <svg viewBox="0 0 100 100" className="absolute inset-0 animate-pulse motion-reduce:animate-none">
          <path d="M50 34l16 16-16 16-16-16z" fill="#d4a94f" />
        </svg>
      </div>
      <p className="font-head text-gold2 text-[1.5rem] leading-[1.7] m-0">ចាន់រ៉ា <span className="text-gold text-base">និង</span> ស្រីណេ</p>
      <p className="font-en text-2xl font-semibold m-0">Chanra &amp; Sreyne</p>
      <div className="mt-8 w-48 h-[3px] bg-gold/25 overflow-hidden">
        <div className="h-full bg-gold transition-[width] duration-500 ease-out" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-3 text-[.85rem] text-muted">កំពុងផ្ទុក {kh(pct)}% <span className="font-en italic text-base">· Loading</span></p>
    </div>
  );
}
