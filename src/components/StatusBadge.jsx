export default function StatusBadge({ status }) {
  const className = status.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return <span className={`status-badge ${className}`}>{status}</span>;
}