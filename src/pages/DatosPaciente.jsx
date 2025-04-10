import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPasos from "../components/HeaderPasos";

export default function DatosPaciente() {
  const navigate = useNavigate();
  const [historia, setHistoria] = useState("");
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSiguiente = () => {
    navigate("/resultados");
  };
  

  const handleAnterior = () => {
    navigate("/analisis-caso");
  };

  return (
    <div style={styles.container}>
      <HeaderPasos titulo="Datos del paciente" pasoActual={5} />

      <label style={styles.label}>Número de historia</label>
      <input
        style={styles.input}
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
        placeholder=""
      />

      <label style={styles.label}>Género</label>
      <div style={styles.radioGroup}>
        <label><input type="radio" value="Hombre" checked={genero === "Hombre"} onChange={() => setGenero("Hombre")} /> Hombre</label>
        <label><input type="radio" value="Mujer" checked={genero === "Mujer"} onChange={() => setGenero("Mujer")} /> Mujer</label>
      </div>

      <label style={styles.label}>Edad</label>
      <input
        style={styles.input}
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder=""
        type="number"
      />

      <label style={styles.label}>Fecha de consulta</label>
      <input
        style={styles.input}
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        type="date"
      />

      <div style={styles.botones}>
        <button style={styles.anterior} onClick={handleAnterior}>
          ANTERIOR
        </button>
        <button style={styles.siguiente} onClick={handleSiguiente}>
          SIGUIENTE
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "5px",
    textAlign: "left",
    marginLeft: "10%",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "10px",
  },
  botones: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "30px",
  },
  anterior: {
    padding: "10px 20px",
    border: "1px solid #3076F8",
    backgroundColor: "transparent",
    color: "#3076F8",
    borderRadius: "5px",
    cursor: "pointer",
  },
  siguiente: {
    padding: "10px 20px",
    backgroundColor: "#3076F8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
