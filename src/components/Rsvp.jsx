import { useState } from "react";
import { CONFIG } from "../data.js";
import Section from "./Section.jsx";
import { GUEST } from "../guest.js";

const field = "w-full mt-1 px-3 py-2.5 text-ivory bg-black/25 border border-gold rounded-sm";

export default function Rsvp() {
  const [name, setName] = useState(GUEST);
  const [guests, setGuests] = useState("1");

  const send = (e) => {
    e.preventDefault();
    const n = name.trim();
    const msg = `សួស្តី! ខ្ញុំឈ្មោះ ${n} នឹងចូលរួមចំនួន ${guests} នាក់។\nHello! I am ${n}, ${guests} guest(s) will join. Thank you for the invitation.`;
    window.open(`https://t.me/${CONFIG.telegramUser}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <Section id="rsvp" kh="ឆ្លើយតបការអញ្ជើញ" en="RSVP (optional)">
      <form onSubmit={send} className="max-w-[380px] mx-auto text-left">
        <label className="block mb-3.5 text-[.95rem]">ឈ្មោះរបស់អ្នក · Your name
          <input className={field} required maxLength={60} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block mb-3.5 text-[.95rem]">ចំនួនភ្ញៀវដែលនឹងចូលរួម · Number of guests
          <select className={field} value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} className="text-neutral-800">{n}</option>)}
          </select>
        </label>
        <button type="submit" className="w-full mt-1.5 bg-gold text-ruby font-bold py-3 rounded-sm cursor-pointer hover:bg-gold2">ផ្ញើតាម Telegram</button>
        <p className="text-[.85rem] text-muted mt-2.5 text-center">
          Send via Telegram · Telegram នឹងបើកជាមួយសារដែលរៀបចំរួច គ្រាន់តែចុចផ្ញើ។<br />
          Telegram opens with your message ready, just tap send.
        </p>
      </form>
    </Section>
  );
}
