// src/components/HeaderAzul.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderAzul({ titulo }) {
    const navigate = useNavigate();

    return (
        <div style={styles.header}>
          <button style={styles.backButton} onClick={() => navigate("/inicio")}>
            ←
          </button>
          <h2 style={styles.titulo}>{titulo}</h2>
        </div>
      );
}

const styles = {
    header: {
      backgroundColor: "#AFCBFF",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    backButton: {
      position: "absolute",
      left: "20px",
      fontSize: "24px",
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
    },
    titulo: {
      margin: "0 auto",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#fff",
    },
  };
