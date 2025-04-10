import Header from "../Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellidos,
      email,
      password,
    };
    console.log(nuevoUsuario);
    fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al registrar el usuario");
        }
        return res.json();
      })
      .then((data) => {
        alert("Usuario registrado con éxito.");
        navigate("/"); // Redirige a inicio de sesión
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un problema al registrar. Inténtalo de nuevo.");
      });
  };

  return (
    <div style={styles.container}>
      <Header />

      <h2 style={styles.title}>Registrarse</h2>
      <p style={styles.subtitle}>Regístrese con su dirección de correo electrónico válida</p>

      <label style={styles.label}>Nombre</label>
      <input
        type="text"
        placeholder="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Apellidos</label>
      <input
        type="text"
        placeholder="apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Dirección de correo electrónico</label>
      <input
        type="email"
        placeholder="nombreapellido@gamil.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Contraseña</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Confirma contraseña</label>
      <input
        type="password"
        placeholder="********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button style={styles.register} onClick={handleRegister}>
          REGISTRARSE
        </button>

        <button style={styles.login} onClick={() => navigate("/")}>
          INICIAR SESIÓN
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
  },
  subtitle: {
    marginBottom: 20,
    color: "#555",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: 10,
  },
  register: {
    padding: "10px 20px",
    backgroundColor: "#3076F8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  login: {
    padding: "10px 20px",
    border: "1px solid #3076F8",
    backgroundColor: "transparent",
    color: "#3076F8",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
