import { useState } from "react";
import { CONFIG } from "../data.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

// Save the QR picture to the guest's device (falls back to opening the picture)
async function download(src, label) {
  const ext = (src.split("?")[0].split(".").pop() || "png").toLowerCase();
  try {
    const blob = await (await fetch(src)).blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${label.replace(/\s+/g, "-")}-QR.${ext}`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch { window.open(src, "_blank", "noopener"); }
}

function Card({ q, i }) {
  const [copied, setCopied] = useState(false);
  const copy = () => navigator.clipboard?.writeText(q.account).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); });

  return (
    <Reveal delay={i * 120} className="flex flex-col items-center">
      <div className="font-kh mt-5 text-gold2 text-xl leading-[1.7]">{q.label}</div>
      <div className="bg-white p-1 border border-2 border-gold rounded-sm w-full max-w-[340px] mt-2">
        <img src={q.image} alt={`QR ${q.label}`} loading="lazy" className="block w-full h-auto" />
      </div>
      {q.name && <div className="mt-3 font-kh font-semibold text-xl tracking-wide">{q.name}</div>}
      {q.account && (
        <button onClick={copy} className="mt-1 text-muted text-[.95rem] cursor-pointer hover:text-gold2">
          {q.account} · <span className="text-gold2">{copied ? "បានចម្លង · Copied" : "ចម្លង · Copy"}</span>
        </button>
      )}
      <button onClick={() => download(q.image, q.label)}
        className="mt-4 bg-gold text-ruby font-bold px-6 py-2.5 rounded-sm cursor-pointer hover:bg-gold2">
        ទាញយក QR
      </button>
    </Reveal>
  );
}

export default function Qr() {
  const list = (CONFIG.qrs || []).filter((q) => q.image);
  if (!list.length) return null;
  return (
    <Section id="qr" kh="ផ្ញើអំណោយមង្គលការ" en="Send a gift with QR">
      <p>វត្តមានរបស់លោកអ្នក គឺជាកាដូដ៏មានតម្លៃបំផុត។ សម្រាប់អ្នកដែលមិនអាចអញ្ជើញមកបាន អាចផ្ញើចំណងដៃតាមរយៈ KHQR។</p>
      <div className={`grid gap-5 ${list.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {list.map((q, i) => <Card key={q.label + i} q={q} i={i} />)}
      </div>
    </Section>
  );
}
