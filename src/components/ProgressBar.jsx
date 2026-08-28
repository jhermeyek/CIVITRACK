export default function ProgressBar({ value }) {
  return (
    <div className="progress-wrap" aria-label={`Avance ${value}%`}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
      <strong>{value}%</strong>
    </div>
  );
}