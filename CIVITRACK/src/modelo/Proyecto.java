package modelo;

/**
 * Modelo que representa un proyecto de obra civil en CIVITRACK.
 */
public class Proyecto {

    private int id;
    private String nombre;
    private String responsable;
    private int avance;
    private String estado;

    public Proyecto() {
    }

    public Proyecto(int id, String nombre, String responsable, int avance, String estado) {
        this.id = id;
        this.nombre = nombre;
        this.responsable = responsable;
        this.avance = avance;
        this.estado = estado;
    }

    public Proyecto(String nombre, String responsable, int avance, String estado) {
        this.nombre = nombre;
        this.responsable = responsable;
        this.avance = avance;
        this.estado = estado;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getResponsable() {
        return responsable;
    }

    public void setResponsable(String responsable) {
        this.responsable = responsable;
    }

    public int getAvance() {
        return avance;
    }

    public void setAvance(int avance) {
        if (avance < 0) {
            this.avance = 0;
        } else if (avance > 100) {
            this.avance = 100;
        } else {
            this.avance = avance;
        }
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Proyecto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", responsable='" + responsable + '\'' +
                ", avance=" + avance +
                ", estado='" + estado + '\'' +
                '}';
    }
}
