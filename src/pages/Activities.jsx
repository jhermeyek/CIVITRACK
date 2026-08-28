import { useMemo, useState } from "react";
import ActivityTable from "../components/ActivityTable";
import ActivityModal from "../components/ActivityModal";
import { useApp } from "../context/AppContext";

export default function Activities() {
  const { activities, updateActivity } = useApp();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [filter, setFilter] = useState("Todas");
  const [notice, setNotice] = useState("");

  const projectActivities = useMemo(
    () => activities.filter((activity) => activity.projectId === "SDM-2024-3666"),
    [activities]
  );

  const filteredActivities =
    filter === "Todas"
      ? projectActivities
      : projectActivities.filter((activity) => activity.status === filter);

  const handleSave = (id, progress, description, evidenceName) => {
    updateActivity(id, progress, description, evidenceName);
    setSelectedActivity(null);
    setNotice("El avance de la actividad fue actualizado correctamente.");
    setTimeout(() => setNotice(""), 3000);
  };

  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">SEGUIMIENTO TÉCNICO</span>
          <h1>Actividades</h1>
          <p>Proyecto <strong>SDM-2024-3666</strong> · 5 actividades visibles.</p>
        </div>
        <div className="filter-group">
          {["Todas", "Pendiente", "En proceso", "Completada"].map((option) => (
            <button key={option} className={`filter-btn ${filter === option ? "active" : ""}`} onClick={() => setFilter(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>

      {notice && <div className="success-alert">✓ {notice}</div>}

      <ActivityTable
        activities={filteredActivities}
        onEdit={setSelectedActivity}
        onValidate={(activity) => {
          setNotice(`Actividad "${activity.name}" enviada al flujo de validación.`);
          setTimeout(() => setNotice(""), 3000);
        }}
      />

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onSave={handleSave}
      />
    </section>
  );
}