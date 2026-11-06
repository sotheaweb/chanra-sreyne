import { CONFIG } from "../data.js";
import Reveal from "./Reveal.jsx";

const photo = CONFIG.welcomePhoto || CONFIG.coverPhoto || CONFIG.coverBackground;

// Gold square with a slowly turning flower
const Flower = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#d4a94f" className="w-20 h-20 sm:w-24 sm:h-24 shrink-0" aria-hidden="true">
    <rect x="3" y="3" width="94" height="94" rx="3" strokeWidth="2" />
    <rect x="10" y="10" width="80" height="80" strokeWidth="1" strokeOpacity=".6" />
    <g className="animate-[spin_40s_linear_infinite] motion-reduce:animate-none" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      {[0, 45, 90, 135].map((r) => <ellipse key={r} cx="50" cy="50" rx="7" ry="30" transform={`rotate(${r} 50 50)`} fill="#d4a94f" fillOpacity=".22" strokeWidth="1.2" />)}
      {[22.5, 67.5, 112.5, 157.5].map((r) => <ellipse key={r} cx="50" cy="50" rx="5" ry="20" transform={`rotate(${r} 50 50)`} fill="#d4a94f" fillOpacity=".45" strokeWidth="1" />)}
    </g>
    <circle cx="50" cy="50" r="6" fill="#d4a94f" stroke="none" />
  </svg>
);

const Corner = ({ className = "" }) => (
  <img src="images/corner.png" alt="" aria-hidden="true" className={`absolute w-12 sm:w-16 opacity-80 pointer-events-none select-none ${className}`} />
);

const Parents = ({ lines = [] }) => (
  <div className="font-head text-gold2 text-[.9rem] sm:text-[1.05rem] leading-[1.9]">
    {lines.filter(Boolean).map((l) => <div key={l}>{l}</div>)}
  </div>
);

export default function Welcome() {
  const P = CONFIG.parents || {};
  const hasParents = [...(P.groom || []), ...(P.bride || [])].some(Boolean);

  return (
    <section id="welcome" className="px-5 md:px-20 lg:px-5 py-16">
      <div className="mx-auto lg:max-w-[65%] grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-center">

        {/* arch photo */}
        <Reveal className="mx-auto w-full max-w-[340px] md:max-w-[440px] lg:max-w-none">
          <div className="p-2 border border-gold/60 rounded-t-full rounded-b-2xl">
            <div className="aspect-[4/6] rounded-t-full rounded-b-xl overflow-hidden border-2 border-gold bg-gold/10 flex items-center justify-center text-muted text-sm text-center">
              {photo
                ? <img src={photo} alt="Sothea & Rane" loading="lazy" className="kenburns w-full h-full object-cover" />
                : <span>ដាក់រូបថតនៅទីនេះ<br />Photo here</span>}
            </div>
          </div>
        </Reveal>

        {/* invitation card */}
        <Reveal delay={150}>
          <div className="relative p-7 sm:p-11 text-center border border-gold/60 outline outline-1 outline-gold/30 outline-offset-[-10px] bg-gradient-to-b from-ruby2/85 to-ruby/90 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
            <Corner className="top-1 left-1 scale-y-[-1]" />
            <Corner className="top-1 right-1 rotate-180" />
            <Corner className="bottom-1 left-1" />
            <Corner className="bottom-1 right-1 scale-x-[-1]" />

            {hasParents && (
              <Reveal delay={200} className="grid grid-cols-2 gap-4 mb-7">
                <Parents lines={P.groom} /><Parents lines={P.bride} />
              </Reveal>
            )}

            <Reveal delay={250}>
              <h2 className="font-head font-normal text-gold2 text-[1.35rem] sm:text-2xl leading-[1.7] m-0">មានកិត្តិយសសូមគោរពអញ្ជើញ</h2>
              <p className="mt-2 text-[.95rem] sm:text-base leading-[2]">
                ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
              </p>
            </Reveal>

            <Reveal delay={350} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 my-8">
              <div>
                <div className="shine font-head text-gold text-[.75rem] sm:text-sm leading-[1.8]">កូនប្រុសនាម</div>
                <div className="shine mt-2 font-head text-gold2 text-[1.35rem] sm:text-2xl leading-[1.5]">ភឺន ចាន់រ៉ា</div>
                
              </div>
              <Flower />
              <div>
                <div className="shine font-head text-gold text-[.75rem] sm:text-sm leading-[1.8]">កូនស្រីនាម</div>
                <div className="shine mt-2 font-head text-gold2 text-[1.35rem] sm:text-2xl leading-[1.5]">ស៊ុំផន ស្រីណេ</div>
              </div>
            </Reveal>

            <Reveal delay={450} className="border-t border-dashed border-gold/50 pt-6">
              <p className="m-0 text-[.95rem] sm:text-base leading-[2]">
                ពិសាភោជនាហារប្រព្រឹត្តនៅ ថ្ងៃអាទិត្យ ២រោច ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស. ២៥៧០ ត្រូវនឹងថ្ងៃ ទី២៤ ខែមករា ឆ្នាំ២០២៧ វេលាម៉ោង ៤:០០ ល្ងាច ស្ថិតនៅគេហដ្ឋានខាងស្រី
                {CONFIG.venueText && <><br />{CONFIG.venueText}</>}
                <br />សូមអរគុណ !
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
