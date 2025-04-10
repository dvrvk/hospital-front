import React, { useEffect, useState } from "react";
import Navegador from "../components/Navegador";

export default function ArchivoCasos() {
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/casos")
      .then((res) => res.json())
      .then((data) => setCasos(data))
      .catch((err) => console.error("Error al cargar casos:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Archivos de casos</h2>

      <input
        type="text"
        placeholder="🔍  Busca caso"
        style={styles.searchBar}
      />
      {casos.map((caso) => (
        <div key={caso.id} style={styles.caso}>
          <div style={styles.cuadroFoto}></div>
          <div style={styles.info}>
            <p><strong>Caso {String(caso.id).padStart(8, '0')}</strong></p>
            <p>Edad: {caso.paciente?.edad}</p>
            <p>Doctor: {caso.usuario?.nombre || "Desconocido"}</p>
            <p>Fecha consulta: {caso.fecha?.split("T")[0] || "Sin fecha"}</p>
            <p>Diagnóstico: {caso.diagnostico || "Pendiente"}</p>
          </div>
          <button style={styles.editar}>EDITAR</button>
        </div>
      ))}
      <Navegador />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  titulo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  searchBar: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "14px",
  },
  caso: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
    position: "relative"
  },
  cuadroFoto: {
    width: "70px",
    height: "70px",
    borderRadius: "6px",
    backgroundColor: "#f2f2f2",
    marginRight: "10px",
    border: "1px solid #ccc",
  },
  info: {
    flexGrow: 1,
    fontSize: "13px",
  },
  editar: {
    position: "absolute",
    right: "15px",
    top: "15px",
    fontSize: "12px",
    padding: "6px 12px",
    border: "1px solid #3076F8",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "#3076F8",
    cursor: "pointer",
  },
};
