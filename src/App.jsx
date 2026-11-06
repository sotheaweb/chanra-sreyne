import Opening from "./components/Opening.jsx";
import Cover from "./components/Cover.jsx";
import Countdown from "./components/Countdown.jsx";
import Program from "./components/Program.jsx";
import MapSection from "./components/MapSection.jsx";
import Gallery from "./components/Gallery.jsx";
import Rsvp from "./components/Rsvp.jsx";
import Music from "./components/Music.jsx";
import Band from "./components/Band.jsx";
import Reveal from "./components/Reveal.jsx";
import Loading from "./components/Loading.jsx";
import Welcome from "./components/Welcome.jsx";
import Qr from "./components/Qr.jsx";

export default function App() {
  return (
    <>
      <Loading />
      <Opening />
      <Cover />
      <Welcome /><Band />
      <Countdown /><Band />
      <Program /><Band />
      <Gallery /><Band />
      <MapSection /><Band />
      <Qr /><Band />
      <Rsvp />
      <footer className="px-5 pt-9 pb-24 text-center">
        <Band className="mb-5" />
        <Reveal>
          <p className="font-head text-gold2 mb-1.5">សូមអរគុណ !</p>
          <div className="font-en italic text-muted text-lg leading-snug">Thank you, we look forward to celebrating with you.</div>
        </Reveal>
      </footer>
      <Music />
    </>
  );
}
