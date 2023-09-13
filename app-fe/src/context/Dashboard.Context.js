"use client";
import { createContext, useContext } from "react";

const DashboardContext = createContext();

export const useDasboard = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error("useDasboard must used within a provider");
  return context;
};

function DashboardProvider({ children }) {

  return (
    <DashboardContext.Provider value={{}}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;