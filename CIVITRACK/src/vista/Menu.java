package vista;

import dao.ProyectoDAO;
import modelo.Proyecto;
import java.util.List;
import java.util.Scanner;

public class Menu {

    private final Scanner scanner = new Scanner(System.in);
    private final ProyectoDAO proyectoDAO = new ProyectoDAO();

    public void iniciar() {

        int opcion;

        do {

            System.out.println("\n=================================");
            System.out.println("         CIVITRACK");
            System.out.println("=================================");
            System.out.println("1. Registrar proyecto");
            System.out.println("2. Consultar proyectos");
            System.out.println("3. Actualizar proyecto");
            System.out.println("4. Eliminar proyecto");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opción: ");

            opcion = Integer.parseInt(scanner.nextLine());

            switch (opcion) {

                case 1:
                    registrarProyecto();
                    break;

                case 2:
                    consultarProyectos();
                    break;

                case 3:
                    actualizarProyecto();
                    break;

                case 4:
                    eliminarProyecto();
                    break;

                case 5:
                    System.out.println("Gracias por utilizar CIVITRACK.");
                    break;

                default:
                    System.out.println("Opción inválida.");
            }

        } while (opcion != 5);
    }

    private void registrarProyecto() {

        System.out.println("\n=== REGISTRAR PROYECTO ===");

        System.out.print("Nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Responsable: ");
        String responsable = scanner.nextLine();

        System.out.print("Avance (%): ");
        int avance = Integer.parseInt(scanner.nextLine());

        System.out.print("Estado: ");
        String estado = scanner.nextLine();

        Proyecto proyecto = new Proyecto(
                nombre,
                responsable,
                avance,
                estado
        );

        if (proyectoDAO.insertar(proyecto)) {
            System.out.println("Proyecto registrado correctamente.");
        } else {
            System.out.println("Error al registrar el proyecto.");
        }
    }

    private void consultarProyectos() {

        System.out.println("\n=== LISTADO DE PROYECTOS ===");

        List<Proyecto> proyectos = proyectoDAO.listar();

        if (proyectos.isEmpty()) {
            System.out.println("No existen proyectos registrados.");
            return;
        }

        for (Proyecto proyecto : proyectos) {
            System.out.println(proyecto);
        }
    }

    private void actualizarProyecto() {

        System.out.print("Ingrese el ID del proyecto: ");
        int id = Integer.parseInt(scanner.nextLine());

        Proyecto proyecto = proyectoDAO.buscarPorId(id);

        if (proyecto == null) {
            System.out.println("Proyecto no encontrado.");
            return;
        }

        System.out.print("Nuevo nombre: ");
        proyecto.setNombre(scanner.nextLine());

        System.out.print("Nuevo responsable: ");
        proyecto.setResponsable(scanner.nextLine());

        System.out.print("Nuevo avance: ");
        proyecto.setAvance(Integer.parseInt(scanner.nextLine()));

        System.out.print("Nuevo estado: ");
        proyecto.setEstado(scanner.nextLine());

        if (proyectoDAO.actualizar(proyecto)) {
            System.out.println("Proyecto actualizado correctamente.");
        } else {
            System.out.println("Error al actualizar el proyecto.");
        }
    }

    private void eliminarProyecto() {

        System.out.print("Ingrese el ID del proyecto: ");
        int id = Integer.parseInt(scanner.nextLine());

        if (proyectoDAO.eliminar(id)) {
            System.out.println("Proyecto eliminado correctamente.");
        } else {
            System.out.println("No fue posible eliminar el proyecto.");
        }
    }
}