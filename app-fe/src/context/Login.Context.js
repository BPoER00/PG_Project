"use client";
import { createContext, useContext } from "react";
import { signIn } from "@/api/Auth.Api";

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must used within a provider");
  return context;
};

function LoginProvider({ children }) {
  const Login = async (credentials) => signIn(credentials);

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
}

export default LoginProvider;
