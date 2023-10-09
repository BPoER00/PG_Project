"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { get as getFamilia } from "@/api/Familia.Api.js";
import { get as getTipoDocumento } from "@/api/TipoDocumento.Api.js";
import { get as getPersona, post } from "@/api/Persona.Api.js";
import { getCookie } from "@/config/cookiesconfig";
import { jwtVerify } from "jose";
import { SECRET_KEY } from "@/config/props";

const PersonaContext = createContext();

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) throw new Error("usePersona must used within a provider");
  return context;
};

function PersonaProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de Personas", status: "this" },
    { id: 2, name: "Nuevas Personas", status: "other" },
  ];

  const [paginate, setPaginate] = useState(defaultPaginate);
  const [familia, setFamilia] = useState();
  const [tipoDocumento, setTipoDocumento] = useState();

  useEffect(() => {
    getFamilia().then((data) =>
      setFamilia(data.map((m) => ({ value: m._id, label: m.nombre })))
    );
    getTipoDocumento().then((data) =>
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

  const personas = async () => {
    const persona = await getPersona()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return persona;
  };

  const insert = async (persona) => post(persona);

  return (
    <PersonaContext.Provider
      value={{
        insert,
        personas,
        familia,
        tipoDocumento,
        paginate,
        changePage,
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export default PersonaProvider;
