import Reveal from "./Reveal.jsx";

export default function Section({ id, kh, en, children, reveal = true }) {
  return (
    <section id={id} className="max-w-[640px] mx-auto px-5 py-14 text-center">
      <Reveal>
        <h2 className="font-head font-normal text-gold2 text-[1.45rem] leading-[1.7] m-0">{kh}</h2>
        <div className="font-en italic text-muted text-xl mb-7">{en}</div>
      </Reveal>
      {reveal ? <Reveal delay={120}>{children}</Reveal> : children}
    </section>
  );
}
