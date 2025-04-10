import React from "react";
import logo from "./assets/dermaPic-grande.png"; // Asegúrate de que la imagen está en esta carpeta
import "./styles/Header.css"; // Importamos los estilos

export default function Header() {
    return (
        <header className="header">
          <img src={logo} alt="Logo DermaPic" className="logo" />
        </header>
      );
    }
    