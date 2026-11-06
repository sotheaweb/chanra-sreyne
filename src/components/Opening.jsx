import { useEffect, useState } from "react";
import { CONFIG } from "../data.js";
import { GUEST } from "../guest.js";
import { playMusic } from "../music.js";
 
export default function Opening() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);
 
  useEffect(() => {
    if (gone) return;
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [gone]);
 
  const start = () => {
    playMusic();            // the tap lets the browser play music
    setOpen(true);
    setTimeout(() => setGone(true), 1300);
  };
  if (gone) return null;
 
  const panel = "absolute top-0 h-full w-1/2 overflow-hidden bg-ruby border-gold transition-transform duration-[1200ms] ease-in-out motion-reduce:duration-200";
  // Photo per screen size: phone (default), tablet (640px+), computer (1024px+).
  // Missing sizes fall back to the next smaller one, then to openingPhoto.
  const P = CONFIG.openingPhotos || {};
  const mobile = P.mobile || CONFIG.openingPhoto;
  const tablet = P.tablet || mobile;
  const desktop = P.desktop || tablet;
  const fram = CONFIG.fram
 
  // One full-screen photo, shown half on each curtain panel so it splits when opened.
  const half = (pos) => mobile && (
    <>
      <picture>
        <source media="(min-width:1024px)" srcSet={desktop} />
        <source media="(min-width:640px)" srcSet={tablet} />
        <img src={mobile} alt="" className={`absolute top-0 ${pos} h-full w-screen max-w-none object-cover object-[60%_50%] sm:object-[60%_50%] lg:object-center`} />
      </picture>
      <div className="absolute inset-0 bg-black/55" />
    </>
  );
  return (
    <div className="fixed inset-0 z-50">
      <div className={`${panel} left-0 ${open ? "-translate-x-full" : ""}`}
        style={mobile ? undefined : { backgroundImage: "linear-gradient(90deg,var(--color-ruby2),var(--color-ruby))" }}>
          {half("left-0")}
      </div>
      <div className={`${panel} right-0 ${open ? "translate-x-full" : ""}`}
        style={mobile ? undefined : { backgroundImage: "linear-gradient(270deg,var(--color-ruby2),var(--color-ruby))" }}>
          {half("right-0")}
      </div>
      <div className={`absolute inset-0 flex flex-col items-center justify-center sm:pb-0 px-6 text-center transition-opacity duration-500 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="band w-full max-w-[320px] mb-5" />
        <p className="font-moulpali text-gold text-[1.6rem] md:text-[3.6rem] mt-3 mb-1">សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
        <p className="mt-5 font-head text-gold text-[1.6rem] md:text-[2.6rem] leading-[1.7] m-0">ចាន់រ៉ា <span className="text-gold2 text-base md:text-[1.6rem]">និង</span> ស្រីណេ</p>
        {/* <p className="font-pinyon text-2xl text-gold2 font-semibold m-0">Chanra &amp; Sreyne</p> */}
        <p className="mt-5 text-gold font-head text-[1.2rem] md:text-[1.6rem]">សូមគោរពអញ្ជើញ</p>
        {GUEST && (
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] mb-5">
            {fram && <img src={fram} alt="" className="block w-full" />}
            <span className={`${fram ? "absolute inset-0" : "py-3"} flex items-center justify-center px-[14%] text-center break-words overflow-hidden font-head text-gold text-[1.2rem] md:text-[1.6rem] leading-snug`}>
              {GUEST}
            </span>
          </div>
        )}
        <button  onClick={start}
          className="text-gold open font-bold px-8 py-3 rounded-sm cursor-pointer hover:bg-gold hover:text-ruby transition delay-75 hover:delay-75">ចុចដើម្បីបើក
          {/* <span className="block font-en italic font-semibold text-base">Tap to open</span> */}
        </button>
        <div className="band w-full max-w-[320px] mt-8" />
      </div>
    </div>
  );
}