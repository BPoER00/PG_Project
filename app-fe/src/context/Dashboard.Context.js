"use client";
import { createContext, useContext } from "react";
import { get, getAsignacionesGroup } from "@/api/Bitacora.Api.js";

const DashboardContext = createContext();

export const useDasboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDasboard must used within a provider");
  return context;
};

function DashboardProvider({ children }) {
  const tablaBitacora = async () => {
    const asignacion = await get()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return asignacion;
  };

  const graficasBitacora = async () => {
    const asignacion = await getAsignacionesGroup()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return asignacion;
  };

  return (
    <DashboardContext.Provider value={{ tablaBitacora, graficasBitacora }}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
