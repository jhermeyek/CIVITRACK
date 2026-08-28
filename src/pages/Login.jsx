import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("javier@civitrack.local");
  const [password, setPassword] = useState("123456");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({
      name: "Javier Ascanio",
      email,
      role: "Administrador",
    });
  };

  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="login-brand">
          <div className="brand-mark large">C</div>
          <div>
            <strong>CIVITRACK</strong>
            <span>Seguimiento y control de obras civiles</span>
          </div>
        </div>
        <div className="login-message">
          <span className="eyebrow">PLATAFORMA DE TRAZABILIDAD</span>
          <h1>Convierte el avance de obra en información accionable.</h1>
          <p>Centraliza proyectos, actividades, avances, evidencias y validaciones en un solo lugar.</p>
        </div>
      </section>

      <section className="login-form-side">
        <form className="login-card" onSubmit={handleSubmit}>
          <span className="eyebrow">ACCESO AL SISTEMA</span>
          <h2>Bienvenido a CIVITRACK</h2>
          <p>Ingrese sus credenciales para continuar.</p>

          <label>
            Correo electrónico
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Contraseña
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <button className="btn primary full" type="submit">Ingresar</button>

          <small className="demo-note">
            Demo académica: las credenciales se validan de forma local.
          </small>
        </form>
      </section>
    </main>
  );
}