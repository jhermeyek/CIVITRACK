export default function Navbar({ user, onLogout }) {
  return (
    <header className="topbar">
      <div>
        <span className="breadcrumb">CIVITRACK /</span>
        <strong> Sistema de seguimiento</strong>
      </div>
      <div className="user-area">
        <button className="notification" aria-label="Notificaciones">🔔</button>
        <div className="avatar">JA</div>
        <div className="user-info">
          <strong>{user?.name ?? "Usuario"}</strong>
          <span>{user?.role ?? "Invitado"}</span>
        </div>
        <button className="logout-btn" onClick={onLogout}>Salir</button>
      </div>
    </header>
  );
}