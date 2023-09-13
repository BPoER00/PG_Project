"use client";
import { createContext, useContext, useState } from "react";

const FamiliaContext = createContext();

export const useFamilia = () => {
  const context = useContext(FamiliaContext);
  if (!context) throw new Error("useFamilia must used within a provider");
  return context;
};

function FamiliaProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de Familias", status: "this" },
    { id: 2, name: "Nueva Familia", status: "other" },
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
    <FamiliaContext.Provider value={{ paginate, changePage }}>
      {children}
    </FamiliaContext.Provider>
  );
}

export default FamiliaProvider;
