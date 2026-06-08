export default function VidTile({
  name,
  role,
  init,
  bg,
  neutral,
}: {
  name: string;
  role: string;
  init: string;
  bg: string;
  neutral?: boolean;
}) {
  return (
    <div className={`hr-vid${neutral ? ' neutral' : ''}`}>
      <div className="ph" style={{ background: `linear-gradient(135deg,${bg})` }}>
        {init}
      </div>
      <div className="label">
        <span className="role">{role}</span> · {name}
      </div>
    </div>
  );
}
