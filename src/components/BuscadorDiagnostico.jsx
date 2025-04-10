import React, { useState } from "react";

const patologias = [
  "Carcinoma Basocelular",
  "Carcinoma Espinocelular",
  "Dermatitis Atópica",
  "Dermatitis Seborreica",
  "Eccema",
  "Lupus Cutáneo",
  "Melanoma",
  "Nevus Benigno",
  "Psoriasis",
  "Queratosis Actínica",
  "Queratosis Arsenical",
  "Queratosis Friccional",
  "Queratosis Follicularis (Enfermedad de Darier)",
  "Queratosis Palmoplantar",
  "Queratosis Pilaris",
  "Queratosis Seborreica",
  "Rosácea",
  "Tiña Corporis",
  "Vitiligo",
  "Xantomas",
  "Xerosis",
  "Zonas de Urticaria",
].sort();

export default function BuscadorDiagnostico({ onSelect }) {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarOtro, setMostrarOtro] = useState(false);
  const [diagnosticoOtro, setDiagnosticoOtro] = useState("");

  const handleSeleccion = (item) => {
    setBusqueda(item);              // ✅ autocompleta en el input
    onSelect && onSelect(item); // 🔁 avisa al padre (AnalisisCaso)
  };

  const filtrados = patologias.filter((p) =>
    p.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ marginBottom: "30px", width: "85%", margin: "auto" }}>
      {!mostrarOtro ? (
        <>
          <input
            type="text"
            placeholder="Buscar diagnóstico"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={styles.input}
          />
          <ul style={styles.lista}>
            {filtrados.map((p, index) => (
              <li key={index} style={styles.item} onClick={() => handleSeleccion(p)}>
                {p}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <input
          type="text"
          placeholder="Escriba el diagnóstico"
          value={diagnosticoOtro}
          onChange={(e) => {
            setDiagnosticoOtro(e.target.value);
            handleSeleccion(e.target.value);
          }}
          style={{ ...styles.input, marginTop: "10px" }}
        />
      )}

      <button style={styles.botonOtro} onClick={() => setMostrarOtro(!mostrarOtro)}>
        {mostrarOtro ? "Volver al buscador" : "Otro"}
      </button>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxHeight: "140px",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  item: {
    padding: "8px 10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
  botonOtro: {
    marginTop: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
