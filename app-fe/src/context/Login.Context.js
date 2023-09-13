"use client";
import { createContext, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context)
    throw new Error("useLogin must used within a provider");
  return context;
};

function LoginProvider({ children }) {

  return (
    <LoginContext.Provider value={{}}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;