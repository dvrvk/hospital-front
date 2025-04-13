import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPasos from "../components/HeaderPasos";
import { usePaciente } from "../context/PacienteContext";

export default function Validar_foto() {
  const navigate = useNavigate();
  const { setFotoTomada } = usePaciente();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("No se pudo acceder a la cámara:", err);
        alert("No se pudo acceder a la cámara.");
      }
    };

    openCamera();
  }, []);

  const capturarFoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setFoto(dataUrl);
  };

  const handleSiguiente = () => {
    setFotoTomada(foto); // Guardar la foto en el contexto
    navigate("/analisis-caso"); // Ruta siguiente
  };

  return (
    <div style={styles.container}>
      <HeaderPasos titulo="Validar foto" pasoActual={3} />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={styles.video}
      />
      <div style={styles.imagePlaceholder}>
        {foto && (
          <img
            src={foto}
            alt="Foto capturada"
            style={{ width: "90%", maxWidth: "300px", border: "2px solid #ccc", margin: "20px auto", borderRadius: "5px" }}
          />
        )}
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />


      <p style={styles.descripcion}>
        Asegúrate de que la foto esté clara y que la condición de la piel no esté cubierta por cabello o ropa.
      </p>

      <div style={styles.botones}>
        <button onClick={capturarFoto} style={styles.siguiente}>
          TOMAR FOTO
        </button>
        <button style={styles.rehacer} onClick={handleSiguiente}>
          SIGUIENTE
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
  imagePlaceholder: {
    width: "90%",
    maxWidth: "300px",
    height: "300px",
    border: "2px solid #ccc",
    margin: "20px auto",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  addPhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  addButton: {
    fontSize: "24px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid #3076F8",
    backgroundColor: "white",
    color: "#3076F8",
    cursor: "pointer",
    marginRight: "5px",
  },
  addText: {
    color: "#3076F8",
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  },
  descripcion: {
    fontSize: "14px",
    color: "#333",
    margin: "0 auto 25px",
    width: "85%",
    marginTop: "10px",
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
  rehacer: {
    padding: "10px 20px",
    border: "1px solid #3076F8",
    backgroundColor: "transparent",
    color: "#3076F8",
    borderRadius: "5px",
    cursor: "pointer",
  },
  video: {
    width: "100%", 
    maxWidth: "600px", 
    height: "auto", 
    borderRadius: "5px", 
    margin: "20px auto",
  },
};
