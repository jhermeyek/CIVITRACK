import ProgressBar from "../components/ProgressBar";

export default function Reports() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <span className="eyebrow">INFORMES DE SEGUIMIENTO</span>
          <h1>Informes</h1>
          <p>Resumen de información disponible para consulta y generación de reportes.</p>
        </div>
        <button className="btn primary" onClick={() => window.print()}>Imprimir informe</button>
      </div>

      <article className="report-sheet">
        <div className="report-header">
          <div>
            <span className="eyebrow">CIVITRACK</span>
            <h2>Informe de seguimiento de obra</h2>
          </div>
          <span>Fecha de corte: 28/08/2026</span>
        </div>

        <div className="report-summary">
          <div><span>Contrato</span><strong>SDM-2024-3666</strong></div>
          <div><span>Ubicación</span><strong>Bogotá D.C.</strong></div>
          <div><span>Estado</span><strong>En ejecución</strong></div>
          <div><span>Avance</span><strong>78%</strong></div>
        </div>

        <div className="report-section">
          <h3>Avance general</h3>
          <ProgressBar value={78} />
          <p>El proyecto presenta un avance general del 78% de acuerdo con los datos registrados en CIVITRACK.</p>
        </div>

        <div className="report-section">
          <h3>Componentes de seguimiento</h3>
          <ul className="report-list">
            <li>Registro de actividades</li>
            <li>Actualización de avances</li>
            <li>Gestión de evidencias</li>
            <li>Validación de actividades</li>
            <li>Consulta de indicadores</li>
          </ul>
        </div>
      </article>
    </section>
  );
}