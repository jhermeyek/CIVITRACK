-- ==========================================
-- BASE DE DATOS CIVITRACK
-- Evidencia: GA7-220501096-AA2-EV01
-- ==========================================

DROP DATABASE IF EXISTS civitrack;

CREATE DATABASE civitrack;

USE civitrack;

-- ==========================================
-- TABLA PROYECTOS
-- ==========================================

CREATE TABLE proyectos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    responsable VARCHAR(100) NOT NULL,

    avance INT NOT NULL,

    estado VARCHAR(50) NOT NULL

);

-- ==========================================
-- DATOS DE PRUEBA
-- ==========================================

INSERT INTO proyectos
(nombre, responsable, avance, estado)
VALUES
('Construcción Puente Norte',
 'Carlos Rodríguez',
 45,
 'En ejecución');

INSERT INTO proyectos
(nombre, responsable, avance, estado)
VALUES
('Mejoramiento Vía Rural',
 'Ana Martínez',
 80,
 'En ejecución');

INSERT INTO proyectos
(nombre, responsable, avance, estado)
VALUES
('Centro Comunitario',
 'Luis Gómez',
 100,
 'Finalizado');

-- ==========================================
-- CONSULTAS DE VALIDACIÓN
-- ==========================================

SELECT * FROM proyectos;