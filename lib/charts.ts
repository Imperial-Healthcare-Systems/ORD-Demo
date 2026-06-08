/** Builds an SVG path string for a smoothed-ish line chart from raw points. */
export function linePath(pts: number[], w: number, h: number): string {
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const sx = w / (pts.length - 1);
  return pts
    .map(
      (p, i) =>
        `${i ? 'L' : 'M'}${(i * sx).toFixed(1)} ${(
          h -
          ((p - min) / (max - min || 1)) * h * 0.8 -
          h * 0.1
        ).toFixed(1)}`,
    )
    .join(' ');
}
