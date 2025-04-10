import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importamos las pantallas
import Login from "./pages/Login";
import Registrarse from "./pages/Registrarse";
import Inicio from "./pages/Inicio";
import Selecciona_area from "./pages/Selecciona_area";
import Validar_foto from "./pages/Validar_foto";
import AnalisisCaso from "./pages/Analisis_caso";
import DatosPaciente from "./pages/DatosPaciente";
import Resultados from "./pages/Resultados";
import ArchivoCasos from "./pages/ArchivoCasos";
import PruebaBuscador from "./pages/PruebaBuscador";
import SeleccionaPaciente from './pages/SeleccionaPaciente';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/selecciona-area" element={<Selecciona_area />} />
        <Route path="/validar-foto" element={<Validar_foto />} />
        <Route path="/analisis-caso" element={<AnalisisCaso />} />
        <Route path="/datos-paciente" element={<DatosPaciente />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/archivos-casos" element={<ArchivoCasos />} />
        <Route path="/prueba-buscador" element={<PruebaBuscador />} />
        <Route path="/selecciona-paciente" element={<SeleccionaPaciente />} />

        {/* Más rutas se agregan aquí */}
      </Routes>
    </Router>
  );
}
