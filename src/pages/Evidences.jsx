import StatusBadge from "../components/StatusBadge";
import { useApp } from "../context/AppContext";

export default function Evidences() {
  const { activities } = useApp();
  const withEvidence = activities.filter((item) => item.evidence);

  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">TRAZABILIDAD DOCUMENTAL</span>
          <h1>Evidencias</h1>
          <p>Consulta las evidencias asociadas a las actividades del proyecto.</p>
        </div>
      </div>

      <div className="evidence-grid">
        {withEvidence.map((item) => (
          <article className="evidence-card" key={item.id}>
            <div className="evidence-preview">📷</div>
            <div className="evidence-content">
              <span className="code">EV-{String(item.id).padStart(3, "0")}</span>
              <h2>{item.name}</h2>
              <p>Registro de evidencia asociado a la actividad ejecutada.</p>
              <div className="card-bottom">
                <span>Actualizada: {item.lastUpdate}</span>
                <StatusBadge status={item.status} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}