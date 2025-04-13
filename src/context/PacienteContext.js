import React, { createContext, useState, useContext } from "react";

const PacienteContext = createContext();

export const usePaciente = () => useContext(PacienteContext);

export const PacienteProvider = ({ children }) => {
  const [paciente, setPaciente] = useState(null);
  const [zonacontext, setZonacontext] = useState(null);
  const [usuariocontext, setUsuariocontext] = useState(null);
  const [diagnostico, setDiagnostico] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [fotoTomada, setFotoTomada] = useState(null);
  
  return (
    <PacienteContext.Provider value={{
      paciente, setPaciente,
      zonacontext, setZonacontext,
      usuariocontext, setUsuariocontext,
      diagnostico, setDiagnostico,
      fecha, setFecha,
      fotoTomada, setFotoTomada
    }}>
      {children}
    </PacienteContext.Provider>
  );
};
