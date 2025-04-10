import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPasos from "../components/HeaderPasos";
import BuscadorDiagnostico from "../components/BuscadorDiagnostico";
import { usePaciente } from "../context/PacienteContext"; // esto faltaba

export default function AnalisisCaso() {
  const navigate = useNavigate();
  const [diagnostico, setDiagnostico] = useState("");
  const [mostrarOtro, setMostrarOtro] = useState(false);
  const [otroDiagnostico, setOtroDiagnostico] = useState("");
  const { setDiagnostico: setDiagnosticoContext } = usePaciente(); // esto faltaba

  const handleSiguiente = () => {
    const diagnosticoFinal = diagnostico === "Otro" ? otroDiagnostico : diagnostico;
    setDiagnosticoContext(diagnosticoFinal); // ✅ guardas en contexto
    navigate("/resultados");
  };

  const handleAnterior = () => {
    navigate("/validar-foto");
  };

  return (
    <div style={styles.container}>
      <HeaderPasos titulo="Análisis del caso" pasoActual={4} />

      <p style={styles.titulo}>Resultado final de la(s) foto(s)</p>

      <div style={styles.galeria}>
        <div style={styles.cuadroFoto}></div>
        <div style={styles.cuadroFoto}></div>
        <div style={styles.cuadroFoto}></div>
      </div>

      {!mostrarOtro && (
        <BuscadorDiagnostico
          onSelect={(value) => {
            setDiagnostico(value);
            setMostrarOtro(value === "Otro");
          }}
        />
      )}

      <div style={styles.opcionesExtra}>
        {mostrarOtro ? (
          <>
            <input
              type="text"
              value={otroDiagnostico}
              onChange={(e) => setOtroDiagnostico(e.target.value)}
              placeholder="Escriba el diagnóstico"
              style={styles.otroInput}
            />
            <button
              style={styles.otroBtn}
              onClick={() => {
                setDiagnostico("");
                setMostrarOtro(false);
              }}
            >
              Volver al buscador
            </button>
          </>
        ) : (
          <button
            style={styles.otroBtn}
            onClick={() => {
              setDiagnostico("Otro");
              setMostrarOtro(true);
            }}
          >
            Otro
          </button>
        )}
      </div>

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
    textAlign: "center",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  titulo: {
    marginTop: "20px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  galeria: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px",
  },
  cuadroFoto: {
    width: "80px",
    height: "80px",
    backgroundColor: "#f0f0f0",
    border: "2px solid #ccc",
    borderRadius: "5px",
  },
  opcionesExtra: {
    marginTop: "15px",
    textAlign: "left",
    marginLeft: "8%",
  },
  otroBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "#3076F8",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "14px",
    padding: 0,
  },
  otroInput: {
    width: "85%",
    padding: "10px",
    marginTop: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #000",
  },
  botones: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "40px", // ⬅️ Espacio extra respecto al botón "Otro"
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
