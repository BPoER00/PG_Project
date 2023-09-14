"use client";
import { createContext, useContext, useState } from "react";
import { get, post } from "@/api/TipoDocumento.Api";

const TipoDocumentoContext = createContext();

export const useTipoDocumento = () => {
  const context = useContext(TipoDocumentoContext);
  if (!context) throw new Error("useTipoDocumento must used within a provider");
  return context;
};

function TipoDocumentoProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de Documentos", status: "this" },
    { id: 2, name: "Nuevo Documento", status: "other" },
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

  const tipoDocumentos = async () => {
    const tipoDocumento = await get()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return tipoDocumento;
  };

  const insert = async (tipoDocumento) => post(tipoDocumento);
  return (
    <TipoDocumentoContext.Provider value={{ insert, tipoDocumentos, paginate, changePage }}>
      {children}
    </TipoDocumentoContext.Provider>
  );
}

export default TipoDocumentoProvider;
