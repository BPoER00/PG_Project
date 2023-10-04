"use client";
import { createContext, useContext, useState } from "react";

const AsignacionContext = createContext();

export const useAsignacion = () => {
  const context = useContext(AsignacionContext);
  if (!context) throw new Error("useAsignacion must used within a provider");
  return context;
};

function AsignacionProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de Asignaciones", status: "this" },
    { id: 2, name: "Nueva Asignacion", status: "other" },
  ];

  const [paginate, setPaginate] = useState(defaultPaginate);

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  return (
    <AsignacionContext.Provider value={{ paginate, changePage }}>
      {children}
    </AsignacionContext.Provider>
  );
}

export default AsignacionProvider;
