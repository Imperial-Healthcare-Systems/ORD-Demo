import type { ReactNode } from 'react';

/** A phone-frame mockup wrapper used by the responsive/mobile screen. */
export default function Phone({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          position: 'relative',
          width: 260,
          height: 540,
          background: '#0F172A',
          borderRadius: 34,
          padding: 11,
          boxShadow: '0 24px 50px -12px rgba(15,23,42,.45)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 11,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 90,
            height: 20,
            background: '#0F172A',
            borderRadius: '0 0 14px 14px',
            zIndex: 5,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#F1F4F9',
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </div>
      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{title}</div>
    </div>
  );
}
