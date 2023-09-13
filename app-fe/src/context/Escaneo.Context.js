"use client";
import { createContext, useContext } from "react";

const EscaneoContext = createContext();

export const useEscaneo = () => {
  const context = useContext(EscaneoContext);
  if (!context)
    throw new Error("useEscaneo must used within a provider");
  return context;
};

function EscaneoProvider({ children }) {

  return (
    <EscaneoContext.Provider value={{}}>
      {children}
    </EscaneoContext.Provider>
  );
}

export default EscaneoProvider;