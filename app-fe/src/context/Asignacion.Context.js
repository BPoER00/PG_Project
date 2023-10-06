"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { get, post } from "@/api/Asignacion.Api";
import { get as getPersona } from "@/api/Persona.Api";
import { get as getDocumento } from "@/api/TipoDocumento.Api";

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
  const [persona, setPersona] = useState();
  const [tipoDocumento, setTipoDocumento] = useState();

  useEffect(() => {
    getPersona().then((data) =>
      setPersona(data.map((m) => ({ value: m._id, label: m.nombre })))
    );
    getDocumento().then((data) =>
      setTipoDocumento(data.map((m) => ({ value: m._id, label: m.nombre })))
    );
  }, []);

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  const asignaciones = async () => {
    const asignacion = await get()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return asignacion;
  };

  const insert = async (asignacion) => post(asignacion);

  return (
    <AsignacionContext.Provider
      value={{ persona, insert, tipoDocumento, asignaciones, paginate, changePage }}
    >
      {children}
    </AsignacionContext.Provider>
  );
}

export default AsignacionProvider;
