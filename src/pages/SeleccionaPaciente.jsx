import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePaciente } from "../context/PacienteContext";

export default function SeleccionaPaciente() {
    const [numeroHistoria, setNumeroHistoria] = useState("");
    const [genero, setGenero] = useState("");
    const [edad, setEdad] = useState("");
    const navigate = useNavigate();
    const { setPaciente } = usePaciente();


    const handleBuscar = () => {
        fetch(`http://localhost:8080/pacientes/buscar?numeroHistoria=${numeroHistoria}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPaciente(data);
                alert("Paciente seleccionado correctamente");
                navigate("/selecciona-area");
            })
            .catch((err) => {
                alert("Paciente no encontrado")
                console.error(err);
            });
    };

    const handleCrear = () => {
        const nuevoPaciente = {
            numeroHistoria,
            genero,
            edad: parseInt(edad, 10),
        };

        fetch("http://localhost:8080/pacientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoPaciente),
        })
        .then((res) => {
            if (!res.ok) {
                return res.text().then((msg) => { throw new Error(msg) });
            }
            return res.json();
        })
        .then((data) => {
            alert("Paciente creado");
            setPaciente(data); // <-- recuerda importar esto de tu contexto si no lo has hecho ya
            navigate("/selecciona-area");
        })
        .catch((err) => {
            alert(err.message); // Ej: "Ya existe un paciente con ese número de historia."
            console.error("Error al crear paciente:", err);
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.encabezado}>
                <button style={styles.flecha} onClick={() => navigate("/inicio")}>
                    ←
                </button>
                <h2 style={styles.titulo}>Selecciona paciente</h2>
            </div>

            <div style={styles.section}>
                <label style={styles.label}>Busca paciente por número de historia</label>
                <input
                    type="text"
                    style={styles.input}
                    value={numeroHistoria}
                    onChange={(e) => setNumeroHistoria(e.target.value)}
                />
                <button style={styles.botonAzul} onClick={handleBuscar}>
                    SELECCIONAR
                </button>
            </div>

            <hr style={styles.separator} />

            <p style={styles.info}>
                Si el paciente no está registrado, completa los datos y dale a crear
            </p>

            <label style={styles.label}>Número de historia</label>
            <input
                type="text"
                style={styles.input}
                value={numeroHistoria}
                onChange={(e) => setNumeroHistoria(e.target.value)}
            />

            <label style={styles.label}>Género</label>
            <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                    <input
                        type="radio"
                        name="genero"
                        value="Hombre"
                        checked={genero === "Hombre"}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    Hombre
                </label>
                <label style={styles.radioLabel}>
                    <input
                        type="radio"
                        name="genero"
                        value="Mujer"
                        checked={genero === "Mujer"}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    Mujer
                </label>
            </div>

            <label style={styles.label}>Edad</label>
            <input
                type="number"
                style={styles.input}
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />

            <button style={styles.botonAzul} onClick={handleCrear}>
                CREAR
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "#fff",
        minHeight: "100vh",
    },
    encabezado: {
        position: "relative",
        backgroundColor: "#2D6EFF",
        padding: "15px 20px",
        borderRadius: "8px 8px 0 0",
        textAlign: "center",
        marginBottom: "20px",
    },
    flecha: {
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
    },
    titulo: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        margin: 0,
    },
    section: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        fontSize: "14px",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px",
    },
    radioGroup: {
        display: "flex",
        gap: "20px",
        marginBottom: "16px",
    },
    radioLabel: {
        fontSize: "14px",
    },
    separator: {
        margin: "30px 0",
        border: "none",
        height: "2px",
        backgroundColor: "#cfe0fc",
    },
    info: {
        fontSize: "14px",
        marginBottom: "12px",
    },
    botonAzul: {
        width: "100%",
        backgroundColor: "#3076F8",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        fontWeight: "bold",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        marginBottom: "20px",
    },
};
