import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPasos from "../components/HeaderPasos";
import cuerpo from "../assets/cuerpo.png";
import { usePaciente } from "../context/PacienteContext";

export default function Selecciona_area() {
  const navigate = useNavigate();
  const [zona, setZona] = useState("");
  const {setZonacontext } = usePaciente();

  const handleSiguiente = () => {
    if(zona.length == 0) {
      alert("Error: es obligatorio rellenar el área del cuerpo")
    } else {
      setZonacontext(zona);
      alert("Zona afectada seleccionada correctamente")
      navigate("/validar-foto"); // Ruta hacia el siguiente paso
    }
  };

  const handleCancelar = () => {
    navigate("/inicio");
  };

  return (
    <div style={styles.container}>
      <HeaderPasos titulo="Selecciona área" pasoActual={2} />

      <img src={cuerpo} alt="Cuerpo humano" style={styles.imagenCuerpo} />

      <p style={styles.texto}>Indica la zona del cuerpo afectada.</p>

      <input
        type="text"
        placeholder="Ej. Antebrazo derecho"
        value={zona}
        onChange={(e) => setZona(e.target.value)}
        style={styles.input}
      />

      <div style={styles.botones}>
        <button style={styles.siguiente} onClick={handleSiguiente}>
          SIGUIENTE
        </button>
        <button style={styles.cancelar} onClick={handleCancelar}>
          CANCELAR
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  imagenCuerpo: {
    width: "50%",
    maxWidth: "250px",
    margin: "20px auto",
    display: "block",
  },
  texto: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  botones: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  siguiente: {
    padding: "10px 20px",
    backgroundColor: "#3076F8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelar: {
    padding: "10px 20px",
    border: "1px solid #3076F8",
    backgroundColor: "transparent",
    color: "#3076F8",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
