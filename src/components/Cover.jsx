import { useEffect, useRef } from "react";
import { CONFIG } from "../data.js";
import { GUEST } from "../guest.js";
import Petals from "./Petals.jsx";
import Band from "./Band.jsx";
 
// Gold corner picture (public/images/corner.png). The picture's own corner is bottom-left,
// so the other three corners are made by flipping it.
const CORNER = "images/corner.png";
const Corner = ({ className = "" }) => (
  <img src={CORNER} alt="" aria-hidden="true"
    className={`absolute z-10 w-20 sm:w-40 lg:w-40 opacity-50 pointer-events-none select-none ${className}`} />
);
 
const DATE = [["ថ្ងៃ", "សៅរ៍–អាទិត្យ"], ["ទី", "២៣–២៤"], ["ខែ", "មករា"], ["ឆ្នាំ", "២០២៧"]];
 
export default function Cover() {
  const bg = useRef(null);
 
  // gentle parallax: background drifts slower than the page
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bg.current) bg.current.style.transform = `translate3d(0,${-Math.min(window.scrollY, 800) * 0.06}px,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
 
  // Background per screen size: phone (default), tablet (640px+), computer (1024px+).
  const B = CONFIG.coverBackgrounds || {};
  const bgMobile = B.mobile || CONFIG.coverBackground || CONFIG.coverPhoto;
  const bgTablet = B.tablet || bgMobile;
  const bgDesktop = B.desktop || bgTablet;
 
  return (
    <header className="relative overflow-hidden min-h-svh flex flex-col items-center justify-center  px-5 py-12 text-center bg-[radial-gradient(ellipse_at_50%_30%,var(--color-ruby2),var(--color-ruby)_70%)]">
      {bgMobile && (
        <>
          <div ref={bg} className="absolute inset-x-0 top-0 h-[112%] will-change-transform">
            <picture>
              <source media="(min-width:1024px)" srcSet={bgDesktop} />
              <source media="(min-width:640px)" srcSet={bgTablet} />
              <img src={bgMobile} alt="Sothea & Rane" className="kenburns w-full h-full object-cover object-center" />
            </picture>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/75" />
        </>
      )}
 
      <Corner className="top-2 left-2 scale-y-[-1]" />
      <Corner className="top-2 right-2 rotate-180" />
      <Corner className="bottom-2 left-2" />
      <Corner className="bottom-2 right-2 scale-x-[-1]" />
      <Petals />
 
      <div className="relative z-10 pt-4">
        <p className="shine font-head text-gold2 text-[1.4rem] sm:text-4xl leading-[1.7] m-0 [text-shadow:0_2px_8px_rgba(0,0,0,.6)]">សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
        <p className="font-pinyon text-gold text-3xl sm:text-5xl leading-snug m-0 [text-shadow:0_2px_8px_rgba(0,0,0,.6)]">The Wedding Invitation</p>
        {/* <Band className="w-80 mt-2" /> */}
      </div>
 
      <div className="relative z-10 w-full max-w-[560px] [text-shadow:0_2px_8px_rgba(0,0,0,.7)]">
        <p className="shine font-moulpali  text-gold2 text-[1.7rem] sm:text-5xl leading-[1.6] mr-10 sm:mr-20">
          ចាន់រ៉ា <span className="shine text-gold text-base sm:text-2xl align-middle">និង</span>
        </p>
        <p className="shine font-moulpali  text-gold2 text-[1.7rem] sm:text-5xl leading-[1.6] ml-10 sm:ml-20">
          ស្រីណេ
        </p>
 
        {GUEST ? (
          <p className=" mb-3 text-shadow-muted sm:text-2xl">សូមគោរពអញ្ជើញ : <span className="sm:text-2xl">{GUEST}</span></p>
        ) : (
          <p className="mt-5 mb-3 font-head text-shadow-muted text-2xl">សូមគោរពអញ្ជើញ</p>
        )}
 
        <div className="grid grid-cols-[1.7fr_1fr_1.2fr_1fr] divide-x divide-gold/40 border-y border-gold/40 bg-black/35">
          {DATE.map(([label, value]) => (
            <div key={label} className="py-2 px-1">
              <div className="text-[.7rem] text-muted leading-tight">{label}</div>
              <div className="font-head text-gold2 text-[.9rem] sm:text-xl leading-[1.6]">{value}</div>
            </div>
          ))}
        </div>
        <p className="font-kh text-muted text-sm m-0 mt-2">23 – 24 January 2027</p>
        <a href="#program" className="inline-block mt-2 text-gold2 text-[.95rem] no-underline">សូមអញ្ជើញមើលកម្មវិធី · See the program ↓</a>
      </div>
    </header>
  );
}