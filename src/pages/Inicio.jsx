import React from "react";
import { useNavigate } from "react-router-dom";

// Importación de imágenes
import logo from "../assets/logo_inicio.png";
import homeIcon from "../assets/pantalla_principal.png";
import perfilIcon from "../assets/perfil.png";
import archivosIcon from "../assets/archivo_caso.png";
import camaraIcon from "../assets/camara.png";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" style={styles.logo} />

      <div style={styles.grid}>
        <div style={styles.item} onClick={() => navigate("/inicio")}>
          <img src={homeIcon} alt="pantalla principal" style={styles.icon} />
          <span>Pantalla principal</span>
        </div>

        <div style={styles.item} onClick={() => navigate("/perfil")}>
          <img src={perfilIcon} alt="perfil" style={styles.icon} />
          <span>Perfil</span>
        </div>

        <div style={styles.item} onClick={() => navigate("/archivos-casos")}        >
          <img src={archivosIcon} alt="archivos" style={styles.icon} />
          <span>Archivos de casos</span>
        </div>

        <div style={styles.item} onClick={() => navigate("/selecciona-paciente")}>
            <img src={camaraIcon} alt="nuevo caso" style={styles.icon} />
            <span>Nuevo caso</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  logo: {
    width: "130px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    justifyItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#EAF1FD",
    padding: "20px",
    borderRadius: "100px",
    width: "130px",
    height: "130px",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
};
