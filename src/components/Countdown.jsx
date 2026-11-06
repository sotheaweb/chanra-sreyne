import { useEffect, useState } from "react";
import { CONFIG } from "../data.js";
import { downloadIcs } from "../calendar.js";
import Section from "./Section.jsx";

const kh = (n) => String(n).replace(/\d/g, (d) => "០១២៣៤៥៦៧៨៩"[d]);
const target = new Date(CONFIG.weddingTime).getTime();
const left = () => Math.max(0, Math.floor((target - Date.now()) / 1000));

export default function Countdown() {
  const [s, setS] = useState(left);
  useEffect(() => {
    const id = setInterval(() => setS(left()), 1000);
    return () => clearInterval(id);
  }, []);
  const parts = [
    [Math.floor(s / 86400), "ថ្ងៃ"],
    [Math.floor((s % 86400) / 3600), "ម៉ោង"],
    [Math.floor((s % 3600) / 60), "នាទី"],
    [s % 60, "វិនាទី"],
  ];
  return (
    <Section id="count" kh="រាប់ថយក្រោយ" en="Counting down to our day">
      <div className="grid grid-cols-4 gap-2.5 max-w-[420px] mx-auto">
        {parts.map(([v, label]) => (
          <div key={label} className="border border-gold bg-black/20 pt-3 pb-2 px-1">
            {/* key restarts the small flip each time the number changes */}
            <b key={v} className="fadein block font-en text-[2.2rem] font-semibold text-gold2 leading-tight">{kh(String(v).padStart(2, "0"))}</b>
            <small className="text-[.85rem] text-muted">{label}</small>
          </div>
        ))}
      </div>
      <button onClick={downloadIcs}
        className="mt-6 border border-gold text-gold2 px-6 py-2.5 rounded-sm cursor-pointer hover:bg-gold hover:text-ruby">
        បន្ថែមទៅប្រតិទិន
      </button>
    </Section>
  );
}
