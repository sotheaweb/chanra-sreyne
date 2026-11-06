const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37 + 8) % 96,
  dur: 9 + ((i * 13) % 7),
  delay: -((i * 17) % 13),
  drift: ((i % 2 ? 1 : -1) * (30 + ((i * 11) % 50))),
  scale: 0.7 + ((i * 7) % 6) / 10,
}));

export default function Petals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span key={i} className="petal"
          style={{ left: `${p.left}%`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, scale: p.scale, "--drift": `${p.drift}px` }} />
      ))}
    </div>
  );
}
