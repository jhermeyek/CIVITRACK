import { createContext, useContext, useMemo, useState } from "react";
import { initialActivities } from "../data/activities";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activities, setActivities] = useState(initialActivities);
  const [user, setUser] = useState(null);

  // Actualiza el avance y el estado de una actividad desde el formulario.
  const updateActivity = (activityId, progress, description, evidenceName) => {
    setActivities((current) =>
      current.map((activity) => {
        if (activity.id !== activityId) return activity;

        const numericProgress = Math.max(0, Math.min(100, Number(progress)));
        const status =
          numericProgress === 100
            ? "Completada"
            : numericProgress > 0
              ? "En proceso"
              : "Pendiente";

        return {
          ...activity,
          progress: numericProgress,
          status,
          evidence: Boolean(evidenceName) || activity.evidence,
          lastUpdate: new Date().toISOString().slice(0, 10),
          description,
        };
      })
    );
  };

  const value = useMemo(
    () => ({ activities, updateActivity, user, setUser }),
    [activities, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp debe utilizarse dentro de AppProvider");
  return context;
}