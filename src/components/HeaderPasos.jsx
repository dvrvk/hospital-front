import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderPasos({ titulo, pasoActual }) {
  const totalPasos = 5;
  const navigate = useNavigate();

  const renderPasos = () => {
    let pasos = [];

    for (let i = 1; i <= totalPasos; i++) {
      const completado = i < pasoActual;
      const actual = i === pasoActual;

      pasos.push(
        <div key={i} style={{
          ...styles.paso,
          backgroundColor: completado ? "#3076F8" : "white",
          color: completado ? "white" : "#3076F8",
          borderColor: "#3076F8"
        }}>
          {completado ? "✔" : i}
        </div>
      );

      if (i < totalPasos) {
        pasos.push(<div key={`linea-${i}`} style={styles.linea} />);
      }
    }

    return pasos;
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate("/inicio")}>
        ←
      </button>
      <div style={styles.titulo}>{titulo}</div>
      <div style={styles.pasosContainer}>
        {renderPasos()}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#A2BEFF",
    padding: "15px 20px",
    textAlign: "center",
    position: "relative",
  },
  titulo: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
  },
  pasosContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  paso: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "14px",
  },
  linea: {
    width: "25px",
    height: "2px",
    backgroundColor: "#3076F8",
  },
  backButton: {
    position: "absolute",
    top: "12px",
    left: "15px",
    fontSize: "26px",
    background: "#A2BEFF",
    border: "none",
    color: "white",
    cursor: "pointer",
  }
};
