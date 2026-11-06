import { CONFIG } from "../data.js";
import Section from "./Section.jsx";

export default function MapSection() {
  return (
    <div className="sm:max-w-[60%] mx-auto px-5 py-14 text-center">
      <h2 className="font-head font-normal text-gold2 text-[1.45rem] leading-[1.7] m-0">ទីតាំង</h2>
      <div className="font-en italic text-muted text-xl mb-7">Location</div>
      {CONFIG.mapEmbed && (
        <div className="mb-6 border-1 border-gold rounded-2xl p-1.5">
          <iframe
            title="Wedding location map"
            src={CONFIG.mapEmbed}
            className="w-full h-[320px] sm:h-[600px] border-0 rounded-2xl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
      <a href={CONFIG.mapUrl} target="_blank" rel="noopener noreferrer"
         className="inline-block text-gold border-1 border-gold font-bold px-7 py-3 rounded-sm no-underline hover:transition hover:delay-75 hover:bg-gold hover:text-ruby ">
        បើកក្នុង Google Maps
      </a>
      <p className="text-[.85rem] text-muted mt-2.5">Open in Google Maps</p>
    </div>  
  );
}