'use client';
import { useState } from 'react';

/**
 * Homepage hero artwork (Lady Justice). Renders /hero.jpg when present;
 * falls back to a navy gradient with a scales glyph so the hero still
 * looks intentional before the image asset is added.
 */
export default function HeroArt() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return (
      <img
        src="/hero.jpg"
        alt="Lady Justice"
        className="hero-statue"
        onError={() => setOk(false)}
      />
    );
  }
  return (
    <div
      className="hero-statue"
      style={{
        background: 'linear-gradient(150deg,var(--navy-2),#0B1120)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 160,
        filter: 'drop-shadow(0 12px 30px rgba(0,0,0,.4))',
      }}
    >
      ⚖️
    </div>
  );
}
