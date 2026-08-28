import { projects } from "../data/projects";
import ProgressBar from "../components/ProgressBar";
import StatusBadge from "../components/StatusBadge";

export default function Projects({ onSelect }) {
  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">GESTIÓN DE PROYECTOS</span>
          <h1>Proyectos</h1>
          <p>Consulta el estado y avance de los proyectos registrados en CIVITRACK.</p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="card-top">
              <span className="code">{project.id}</span>
              <StatusBadge status={project.status} />
            </div>
            <h2>{project.name}</h2>
            <p>📍 {project.location}</p>
            <ProgressBar value={project.progress} />
            <div className="project-stats">
              <span><strong>{project.activities}</strong> actividades</span>
              <span><strong>{project.completed}</strong> completas</span>
              <span><strong>{project.pending}</strong> pendientes</span>
            </div>
            <button className="btn secondary full" onClick={() => onSelect(project.id)}>Consultar proyecto</button>
          </article>
        ))}
      </div>
    </section>
  );
}