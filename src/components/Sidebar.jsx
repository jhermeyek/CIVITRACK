const menu = [
  ["dashboard", "Dashboard", "▦"],
  ["projects", "Proyectos", "▤"],
  ["activities", "Actividades", "✓"],
  ["progress", "Registrar avance", "↗"],
  ["evidences", "Evidencias", "▣"],
  ["validation", "Validación", "◉"],
  ["reports", "Informes", "▥"],
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">C</div>
        <div>
          <strong>CIVITRACK</strong>
          <small>Seguimiento de obras</small>
        </div>
      </div>

      <nav>
        <p className="nav-title">MENÚ PRINCIPAL</p>
        {menu.map(([id, label, icon]) => (
          <button
            key={id}
            className={`nav-item ${activePage === id ? "active" : ""}`}
            onClick={() => onNavigate(id)}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small>Frontend académico</small>
        <strong>GA7-AA4-EV03</strong>
      </div>
    </aside>
  );
}