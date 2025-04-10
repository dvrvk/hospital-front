import Header from "../Header"; // Importa el componente
import React, { useState } from "react"; // Se agregó la importación de useState
import { useNavigate } from "react-router-dom";
import { usePaciente } from "../context/PacienteContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUsuariocontext } = usePaciente();


  const handleLogin = () => {
    fetch(`http://localhost:8080/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
      "email": username,
      "password": password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
          setUsuariocontext(data);
          alert("Has iniciado sesión");
          navigate("/inicio");


        
      })
      .catch((err) => {
        console.log(err)
        alert("Error: usuario o contraseña incorrectos")
      });

  };

  return (
    <div style={styles.container}>
      <Header /> {/* Agregamos el encabezado aquí */}

      <h2>Iniciar sesión</h2>
      <p>Inicia sesión en tu cuenta registrada</p>

      <label style={styles.label}>Email</label>
      <input
        type="text"
        placeholder="usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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

      <a href="#" style={styles.link}>
        ¿Te has olvidado de la contraseña?
      </a>

      <div style={styles.buttonContainer}>
        <button style={styles.register} onClick={() => navigate("/registrarse")}>
          REGISTRARSE
        </button>

        <button style={styles.login} onClick={handleLogin}>
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
  link: {
    color: "#1E88E5",
    textDecoration: "none",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  register: {
    padding: "10px 20px",
    border: "1px solid #3076F8",
    backgroundColor: "transparent",
    color: "#3076F8",
    borderRadius: "5px",
    cursor: "pointer",
  },
  login: {
    padding: "10px 20px",
    backgroundColor: "#3076F8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
