# CIVITRACK – Componente Frontend React JS

## Evidencia
**GA7-220501096-AA4-EV03 – Componente frontend del proyecto formativo y proyectos de clase**

## Descripción

CIVITRACK es una propuesta de plataforma web para el seguimiento y control de obras civiles. El frontend implementa un prototipo funcional orientado a la gestión de proyectos, actividades, avances, evidencias, validación e informes.

La solución toma como referencia los artefactos previos del proyecto CIVITRACK y sus roles definidos: Administrador, Residente de obra, Interventor y Contratista.

## Tecnologías

- React 19
- Vite
- JavaScript
- JSX
- CSS3
- Git / GitHub

React utiliza una arquitectura basada en componentes y manejo de estado para actualizar la interfaz de manera dinámica.

## Funcionalidades implementadas

- Inicio de sesión local para demostración.
- Dashboard con indicadores.
- Consulta de proyectos.
- Consulta y filtrado de actividades.
- Registro y actualización de avances.
- Registro de evidencia de archivo.
- Flujo de validación de actividades.
- Consulta de evidencias.
- Vista de informe e impresión.
- Diseño responsive para escritorio y dispositivos móviles.

## Instalación

Requiere Node.js y npm.

```bash
npm install
npm run dev
```

Luego abrir la dirección mostrada por Vite, normalmente:

```text
http://localhost:5173
```

## Compilación

```bash
npm run build
```

## Credenciales de demostración

El formulario de acceso es local y académico. Se puede ingresar con cualquier correo válido y contraseña no vacía; los valores precargados son:

```text
Correo: javier@civitrack.local
Contraseña: 123456
```

## Estructura

```text
src/
├── components/   Componentes reutilizables
├── context/      Estado compartido de la aplicación
├── data/         Datos de demostración
├── pages/        Vistas principales
└── styles/       Estilos globales y responsive
```

## Versionamiento

El proyecto debe mantenerse en Git. Se recomienda utilizar commits por funcionalidad, por ejemplo:

```text
Inicialización del proyecto CIVITRACK
Implementación del login
Implementación del dashboard
Implementación de proyectos y actividades
Implementación del registro de avances
Implementación de evidencias y validación
Ajustes responsive y documentación
```

## Alcance

Esta evidencia corresponde al componente frontend. Los datos utilizados son de demostración y no sustituyen una API o base de datos de producción.

## Autor

Javier Mauricio Ascanio García
