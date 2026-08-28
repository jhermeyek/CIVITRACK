import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Progress() {
  const { activities, updateActivity } = useApp();
  const [activityId, setActivityId] = useState(2);
  const [progress, setProgress] = useState(75);
  const [description, setDescription] = useState("");
  const [evidenceName, setEvidenceName] = useState("");
  const [message, setMessage] = useState("");

  const current = activities.find((item) => item.id === Number(activityId));

  const handleActivityChange = (event) => {
    const id = Number(event.target.value);
    setActivityId(id);
    const activity = activities.find((item) => item.id === id);
    setProgress(activity?.progress ?? 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateActivity(activityId, progress, description, evidenceName);
    setMessage("Avance registrado correctamente.");
    setDescription("");
    setEvidenceName("");
  };

  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">REGISTRO DE AVANCE</span>
          <h1>Actualizar actividad</h1>
          <p>Registre el avance físico y la evidencia asociada a una actividad.</p>
        </div>
      </div>

      <div className="form-layout">
        <form className="panel form-card" onSubmit={handleSubmit}>
          {message && <div className="success-alert">✓ {message}</div>}

          <label>
            Proyecto
            <input value="SDM-2024-3666 · Señalización y seguridad vial" readOnly />
          </label>

          <label>
            Actividad
            <select value={activityId} onChange={handleActivityChange}>
              {activities.filter((item) => item.projectId === "SDM-2024-3666").map((activity) => (
                <option key={activity.id} value={activity.id}>{activity.name}</option>
              ))}
            </select>
          </label>

          <div className="two-columns">
            <label>
              Avance anterior
              <input value={`${current?.progress ?? 0}%`} readOnly />
            </label>
            <label>
              Nuevo avance (%)
              <input type="number" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)} required />
            </label>
          </div>

          <label>
            Descripción del avance
            <textarea rows="6" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describa las actividades ejecutadas, novedades y observaciones..." required />
          </label>

          <label>
            Evidencia fotográfica o documental
            <input type="file" accept="image/*,.pdf" onChange={(e) => setEvidenceName(e.target.files?.[0]?.name ?? "")} />
          </label>

          {evidenceName && <div className="file-selected">✓ Archivo seleccionado: {evidenceName}</div>}

          <div className="form-actions">
            <button type="reset" className="btn secondary">Limpiar</button>
            <button type="submit" className="btn primary">Guardar avance</button>
          </div>
        </form>

        <aside className="panel help-card">
          <span className="eyebrow">CONTROL DEL REGISTRO</span>
          <h2>Buenas prácticas</h2>
          <ul>
            <li>El avance debe corresponder al estado real de la actividad.</li>
            <li>La descripción debe permitir identificar qué se ejecutó.</li>
            <li>Las evidencias respaldan la trazabilidad del avance.</li>
            <li>Los cambios quedan reflejados inmediatamente en el frontend.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}