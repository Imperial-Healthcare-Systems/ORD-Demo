'use client';
import { useState } from 'react';
import type { CSSProperties } from 'react';

/**
 * Imperial Tech Innovations logo mark.
 * Renders /mark.png when present; falls back to the gold ⚖ glyph badge
 * (the original demo look) if the image is missing.
 */
export default function BrandMark({
  size = 36,
  radius = 9,
  fontSize,
  style,
}: {
  size?: number;
  radius?: number;
  fontSize?: number;
  style?: CSSProperties;
}) {
  const [ok, setOk] = useState(true);
  if (ok) {
    return (
      <img
        src="/mark.png"
        width={size}
        height={size}
        alt="Imperial Tech Innovations"
        onError={() => setOk(false)}
        style={{ width: size, height: size, objectFit: 'contain', flexShrink: 0, ...style }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: 'linear-gradient(135deg,var(--gold),var(--gold-deep))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--navy)',
        fontFamily: 'var(--serif)',
        fontWeight: 700,
        fontSize: fontSize ?? Math.round(size * 0.52),
        flexShrink: 0,
        ...style,
      }}
    >
      ⚖
    </div>
  );
}
