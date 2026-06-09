import { CHIP_CLASS, type StatusKey } from '@/lib/data';

export default function StatusChip({
  stKey,
  label,
}: {
  stKey: StatusKey;
  label: string;
}) {
  return (
    <span className={`chip ${CHIP_CLASS[stKey] || 'chip-pending'}`}>
      <span className="d" />
      {label}
    </span>
  );
}
