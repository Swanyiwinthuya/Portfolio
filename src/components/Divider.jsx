export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 900 60" preserveAspectRatio="none">
        <path
          d="M0,35 C120,10 220,55 340,30 C460,5 560,55 680,28 C800,2 860,22 900,18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="spark">✦</span>
      <span className="spark two">✦</span>
    </div>
  );
}
