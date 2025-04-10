import React, { useState } from "react";
import BuscadorDiagnostico from "../components/BuscadorDiagnostico";

export default function PruebaBuscador() {
  const [seleccionado, setSeleccionado] = useState("");

  return (
    <div style={styles.container}>
      <h2>Prueba del Buscador de Diagnóstico</h2>
      <BuscadorDiagnostico onSelect={(valor) => setSeleccionado(valor)} />
      <p><strong>Diagnóstico seleccionado:</strong> {seleccionado}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
};
