"use client";
import { createContext, useContext, useState } from "react";

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

  return (
    <TipoDocumentoContext.Provider value={{ paginate, changePage }}>
      {children}
    </TipoDocumentoContext.Provider>
  );
}

export default TipoDocumentoProvider;
