import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { useApp } from "../context/AppContext";

export default function Validation() {
  const { activities } = useApp();
  const [validated, setValidated] = useState([]);

  const pending = activities.filter((item) => item.progress > 0 && item.progress < 100);

  const handleValidate = (id) => {
    setValidated((current) => [...new Set([...current, id])]);
  };

  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">CONTROL DE INTERVENTORÍA</span>
          <h1>Validación</h1>
          <p>Revise las actividades en proceso antes de su aprobación.</p>
        </div>
      </div>

      <div className="validation-list">
        {pending.map((activity) => {
          const isValidated = validated.includes(activity.id);
          return (
            <article className="validation-item" key={activity.id}>
              <div className="validation-icon">{isValidated ? "✓" : "!"}</div>
              <div className="validation-info">
                <span className="code">ACT-{String(activity.id).padStart(3, "0")}</span>
                <h2>{activity.name}</h2>
                <p>Avance reportado: <strong>{activity.progress}%</strong> · Evidencia: {activity.evidence ? "registrada" : "pendiente"}</p>
              </div>
              <StatusBadge status={isValidated ? "Completada" : "En proceso"} />
              <button className="btn secondary" disabled={isValidated} onClick={() => handleValidate(activity.id)}>
                {isValidated ? "Validada" : "Validar"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}