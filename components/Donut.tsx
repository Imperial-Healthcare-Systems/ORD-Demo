export default function Donut({ segs }: { segs: { v: number; color: string }[] }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 140 140" style={{ width: 140, height: 140 }}>
      {segs.map((s, i) => {
        const len = (c * s.v) / 100;
        const off = (-acc * c) / 100;
        acc += s.v;
        return (
          <circle
            key={i}
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="18"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={off}
            transform="rotate(-90 70 70)"
          />
        );
      })}
    </svg>
  );
}
