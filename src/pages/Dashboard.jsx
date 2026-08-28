import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import StatusBadge from "../components/StatusBadge";
import { projects } from "../data/projects";
import { useApp } from "../context/AppContext";

export default function Dashboard({ onNavigate }) {
  const { activities } = useApp();
  const activeActivities = activities.filter((item) => item.projectId === "SDM-2024-3666");
  const completed = activeActivities.filter((item) => item.status === "Completada").length;
  const pending = activeActivities.filter((item) => item.status === "Pendiente").length;

  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">RESUMEN OPERATIVO</span>
          <h1>Dashboard</h1>
          <p>Visión general del seguimiento de proyectos y actividades.</p>
        </div>
        <button className="btn primary" onClick={() => onNavigate("progress")}>+ Registrar avance</button>
      </div>

      <div className="stats-grid">
        <StatCard label="Proyectos" value={projects.length} icon="▤" />
        <StatCard label="Actividades" value={activities.length} icon="✓" />
        <StatCard label="Completadas" value={completed} icon="●" />
        <StatCard label="Pendientes" value={pending} icon="○" />
      </div>

      <div className="content-grid">
        <article className="panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">PROYECTO DESTACADO</span>
              <h2>SDM-2024-3666</h2>
            </div>
            <StatusBadge status="En ejecución" />
          </div>
          <p className="project-description">Suministro e implementación de elementos de señalización y dispositivos de seguridad vial.</p>
          <div className="project-meta">
            <span>📍 Bogotá D.C.</span>
            <span>📅 Corte: 28/08/2026</span>
          </div>
          <ProgressBar value={78} />
          <div className="metric-row">
            <span><strong>24</strong> completadas</span>
            <span><strong>8</strong> pendientes</span>
            <button className="link-btn" onClick={() => onNavigate("activities")}>Ver actividades →</button>
          </div>
        </article>

        <article className="panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">ESTADO</span>
              <h2>Indicadores</h2>
            </div>
          </div>
          <div className="indicator-list">
            <div><span>Avance físico</span><strong>78%</strong></div>
            <div><span>Evidencias registradas</span><strong>60%</strong></div>
            <div><span>Actividades validadas</span><strong>75%</strong></div>
            <div><span>Reportes pendientes</span><strong>3</strong></div>
          </div>
        </article>
      </div>
    </section>
  );
}