package dao;

import conexion.ConexionBD;
import modelo.Proyecto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * DAO para realizar operaciones CRUD sobre la tabla proyectos.
 */
public class ProyectoDAO {

    public boolean insertar(Proyecto proyecto) {
        String sql = "INSERT INTO proyectos(nombre,responsable,avance,estado) VALUES (?,?,?,?)";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, proyecto.getNombre());
            ps.setString(2, proyecto.getResponsable());
            ps.setInt(3, proyecto.getAvance());
            ps.setString(4, proyecto.getEstado());

            return ps.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<Proyecto> listar() {
        List<Proyecto> proyectos = new ArrayList<>();
        String sql = "SELECT * FROM proyectos";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Proyecto proyecto = new Proyecto(
                        rs.getInt("id"),
                        rs.getString("nombre"),
                        rs.getString("responsable"),
                        rs.getInt("avance"),
                        rs.getString("estado")
                );
                proyectos.add(proyecto);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return proyectos;
    }

    public boolean actualizar(Proyecto proyecto) {
        String sql = "UPDATE proyectos SET nombre=?, responsable=?, avance=?, estado=? WHERE id=?";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, proyecto.getNombre());
            ps.setString(2, proyecto.getResponsable());
            ps.setInt(3, proyecto.getAvance());
            ps.setString(4, proyecto.getEstado());
            ps.setInt(5, proyecto.getId());

            return ps.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean eliminar(int id) {
        String sql = "DELETE FROM proyectos WHERE id=?";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setInt(1, id);

            return ps.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public Proyecto buscarPorId(int id) {
        String sql = "SELECT * FROM proyectos WHERE id=?";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setInt(1, id);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new Proyecto(
                            rs.getInt("id"),
                            rs.getString("nombre"),
                            rs.getString("responsable"),
                            rs.getInt("avance"),
                            rs.getString("estado")
                    );
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }
}
