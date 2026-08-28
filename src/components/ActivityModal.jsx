import { useEffect, useState } from "react";

export default function ActivityModal({ activity, onClose, onSave }) {
  const [progress, setProgress] = useState(activity?.progress ?? 0);
  const [description, setDescription] = useState("");
  const [evidenceName, setEvidenceName] = useState("");

  useEffect(() => {
    setProgress(activity?.progress ?? 0);
    setDescription(activity?.description ?? "");
    setEvidenceName("");
  }, [activity]);

  if (!activity) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(activity.id, progress, description, evidenceName);
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="activity-modal-title">
        <div className="modal-header">
          <div>
            <span className="eyebrow">ACTUALIZACIÓN DE ACTIVIDAD</span>
            <h2 id="activity-modal-title">{activity.name}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Avance actual
            <input type="number" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)} />
          </label>

          <label>
            Descripción del avance
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describa las actividades ejecutadas durante el periodo..."
              required
            />
          </label>

          <label>
            Evidencia
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setEvidenceName(e.target.files?.[0]?.name ?? "")}
            />
          </label>

          {evidenceName && <div className="file-selected">✓ {evidenceName}</div>}

          <div className="modal-actions">
            <button type="button" className="btn secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn primary">Guardar avance</button>
          </div>
        </form>
      </div>
    </div>
  );
}