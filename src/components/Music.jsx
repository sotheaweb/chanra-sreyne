import { useEffect, useState } from "react";
import { audio, playMusic } from "../music.js";

export default function Music() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!audio) return;
    const p = () => setOn(true), q = () => setOn(false);
    audio.addEventListener("play", p); audio.addEventListener("pause", q);
    return () => { audio.removeEventListener("play", p); audio.removeEventListener("pause", q); };
  }, []);
  if (!audio) return null;

  return (
    <button onClick={() => (audio.paused ? playMusic() : audio.pause())} aria-label="Music"
      className={`spin fixed z-30 right-3.5 bottom-[calc(14px+env(safe-area-inset-bottom,0px))] w-[46px] h-[46px] rounded-full border border-gold bg-ruby text-gold2 text-xl cursor-pointer ${on ? "animate-[spin_6s_linear_infinite]" : ""}`}>♪</button>
  );
}
