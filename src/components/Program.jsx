import { useState } from "react";
import { DAYS } from "../data.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Program() {
  const [idx, setIdx] = useState(0);
  const d = DAYS[idx];
  return (
    <Section id="program" kh="កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍" en="The Wedding Ceremonies" reveal={false}>
      <div role="tablist" className="grid grid-cols-2 gap-2.5 mb-8">
        {DAYS.map((x, i) => (
          <button key={x.en} role="tab" aria-selected={i === idx} onClick={() => setIdx(i)}
            className={`border border-gold py-2 cursor-pointer transition-colors ${i === idx ? "bg-gold text-ruby font-bold" : "text-gold2 hover:bg-gold/15"}`}>
            {x.kh.split(" ")[0]}
            <span className="block font-en italic text-base">{x.en.split(" · ")[0]}</span>
          </button>
        ))}
      </div>

      <div key={idx} className="text-left">
        <h3 className="fadein font-head font-normal text-gold2 text-[1.1rem] leading-[1.7] m-0 text-center">{d.kh}</h3>
        <div className="fadein font-en italic text-muted text-center mb-4">{d.en}</div>
        {d.ev.map(([tkh, ten, pkh, pen], i) => (
          <Reveal key={ten + pkh} delay={i * 60}
            className="grid grid-cols-[92px_1fr] gap-3.5 py-3.5 border-t border-gold/35 last:border-b">
            <div className="text-gold2 font-bold text-[.95rem] leading-normal">
              {tkh}
              <span className="block font-en font-semibold text-gold text-[1.05rem]">{ten}</span>
            </div>
            <p className="m-0 text-[.98rem] leading-[1.7]">
              {pkh}
              <span className="block mt-0.5 font-en italic text-muted leading-snug">{pen}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
