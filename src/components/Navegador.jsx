import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import homeIcon from "../assets/BLANCOpantalla_principal.png";
import camaraIcon from "../assets/BLANCOcamara.png";
import archivoIcon from "../assets/BLANCOarchivo_caso.png";
import perfilIcon from "../assets/BLANCOperfil.png";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActive = (path) => location.pathname === path;

  return (
    <div style={styles.container}>
      <div style={styles.item}>
        {getActive("/inicio") && <div style={styles.activeLine} />}
        <img src={homeIcon} alt="Inicio" style={styles.icon} onClick={() => navigate("/inicio")} />
      </div>

      <div style={styles.item}>
        {getActive("/resultados") && <div style={styles.activeLine} />}
        <img src={camaraIcon} alt="Nuevo caso" style={styles.icon} onClick={() => navigate("/resultados")} />
      </div>

      <div style={styles.item}>
        {getActive("/archivos-casos") && <div style={styles.activeLine} />}
        <img src={archivoIcon} alt="Archivos" style={styles.icon} onClick={() => navigate("/archivos-casos")} />
      </div>

      <div style={styles.item}>
        {getActive("/perfil") && <div style={styles.activeLine} />}
        <img src={perfilIcon} alt="Perfil" style={styles.icon} onClick={() => navigate("/perfil")} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0 5px",
    borderTop: "1px solid #ddd",
    zIndex: 1000,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
  activeLine: {
    position: "absolute",
    top: "-10px",
    width: "30px",
    height: "4px",
    backgroundColor: "#3076F8",
    borderRadius: "2px",
  },
};