import type { CSSProperties } from 'react';
import { ICONS, type IconName } from '@/lib/icons';

type IconProps = {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Line icon rendered from the shared registry.
 * When size/width/height are omitted, the icon inherits its dimensions from CSS
 * (matching the original demo where most icons were sized by parent rules).
 */
export default function Icon({
  name,
  size,
  width,
  height,
  strokeWidth,
  className,
  style,
}: IconProps) {
  const w = width ?? size;
  const h = height ?? size;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={w}
      height={h}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
