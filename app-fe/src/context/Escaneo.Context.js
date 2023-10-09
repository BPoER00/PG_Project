"use client";
import { createContext, useContext } from "react";
import { post } from "@/api/Bitacora.Api.js";

const EscaneoContext = createContext();

export const useEscaneo = () => {
  const context = useContext(EscaneoContext);
  if (!context) throw new Error("useEscaneo must used within a provider");
  return context;
};

function EscaneoProvider({ children }) {
  const insert = async (bitacora) => post({ persona_id: "3360119891902" });

  return (
    <EscaneoContext.Provider value={{ insert }}>
      {children}
    </EscaneoContext.Provider>
  );
}

export default EscaneoProvider;
