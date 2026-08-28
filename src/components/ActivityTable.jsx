import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar";

export default function ActivityTable({ activities, onEdit, onValidate }) {
  return (
    <div className="table-card">
      <div className="table-header">
        <div>
          <h3>Actividades del proyecto</h3>
          <p>Seguimiento de ejecución y actualización de avances.</p>
        </div>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Categoría</th>
              <th>Avance</th>
              <th>Estado</th>
              <th>Evidencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>
                  <strong>{activity.name}</strong>
                  <small>Actualizada: {activity.lastUpdate}</small>
                </td>
                <td>{activity.category}</td>
                <td className="progress-cell"><ProgressBar value={activity.progress} /></td>
                <td><StatusBadge status={activity.status} /></td>
                <td>{activity.evidence ? <span className="evidence-ok">✓ Registrada</span> : <span className="muted">Pendiente</span>}</td>
                <td>
                  <div className="action-row">
                    <button className="table-btn" onClick={() => onEdit(activity)}>Editar</button>
                    <button className="table-btn secondary" onClick={() => onValidate(activity)}>Validar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}