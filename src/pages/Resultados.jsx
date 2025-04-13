import React, { useEffect } from "react";
import HeaderPasos from "../components/HeaderPasos";
import Navegador from "../components/Navegador";
import { usePaciente } from "../context/PacienteContext";

export default function Resultados() {
  const { paciente, zonacontext, usuariocontext, diagnostico, fotoTomada } = usePaciente();

  const handleGuardar = () => {
    console.log(paciente)
    console.log(zonacontext)
    console.log(usuariocontext)
    console.log(diagnostico)
    if (paciente && usuariocontext && zonacontext && diagnostico) {
      const casoClinico = {
        zona: zonacontext,
        diagnostico: diagnostico,
        consulta: {
          fechaConsulta: new Date().toISOString().split("T")[0],
          pacienteId: paciente.id,
          usuarioId: usuariocontext.id
        },
        img: fotoTomada,

      };

      fetch("http://localhost:8080/casos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(casoClinico),
      })
        .then((res) => res.json())
        .then((data) => console.log("Caso clínico guardado:", data))
        .catch((err) => console.error("Error al guardar caso clínico:", err));
    }
  }

  return (
    <div style={styles.container}>
      <HeaderPasos titulo="Resultados" pasoActual={5} />

      <div style={styles.alerta}>
        <p style={styles.tituloAlerta}>✅ Caso guardado en <strong>{paciente?.numeroHistoria || "[nº historia]"}</strong></p>
        <p style={styles.subtextoAlerta}>Guardado en Archivos de casos</p>
      </div>

      <div style={styles.card}>
        <p><strong>Información del paciente</strong></p>
        <p>Número de historia: {paciente?.numeroHistoria}</p>
        <p>Género: {paciente?.genero}</p>
        <p>Edad: {paciente?.edad}</p>
        <p><strong>Fecha de consulta:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Diagnóstico:</strong> {diagnostico}</p>
        <div style={styles.galeria}>
          {fotoTomada ? (
            <img
              src={fotoTomada}
              alt="Foto capturada"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "5px",
                border: "2px solid #ccc",
              }}
            />
          ) : (
            <p>No hay foto disponible</p>
          )}
        </div>
      </div>
      <button style={styles.botonAzul} onClick={handleGuardar}>
        GUARDAR
      </button>
      <Navegador />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  alerta: {
    backgroundColor: "#DFF6DD",
    border: "1px solid #a3d9a5",
    padding: "15px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  tituloAlerta: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "16px"
  },
  subtextoAlerta: {
    fontSize: "14px",
    color: "#333"
  },
  card: {
    border: "1px solid #000",
    borderRadius: "6px",
    padding: "15px",
    width: "90%",
    maxWidth: "350px",
    margin: "0 auto",
    fontSize: "14px",
    lineHeight: "1.6"
  }
};
