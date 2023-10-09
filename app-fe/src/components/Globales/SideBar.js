"use client";
import ComponentSidebarTitle from "./SidebarTitle.js";
import ComponentSidebarRedirect from "./SidebarRedirect.js";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SideBar() {
  const router = useRouter();

  const [url, setUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;

    setUrl(currentUrl);
  }, []);

  const isDashboard = url.includes("/Dashboard");
  const isAsignacion = url.includes("/Asignacion");
  const isFamilia = url.includes("/Familia");
  const isPersona = url.includes("/Persona");
  const isTipoDocumento = url.includes("/TipoDocumento");

  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-200 dark:bg-gray-700 h-full text-gray-900 dark:text-gray-300 transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <ComponentSidebarTitle name={"Opciones"} />

          <Link href={"/Dashboard"}>
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex justify-center items-center mr-1 ${
                    isDashboard ? "text-gray-600" : ""
                  }`}
                >
                  <HomeIcon className="h-7 w-7" />
                </span>
                <span
                  className={`ml-2 text-sm font-semibold tracking-wide truncate ${
                    isDashboard ? "text-gray-600" : ""
                  }`}
                >
                  Home
                </span>
              </div>
            </ComponentSidebarRedirect>
          </Link>

          <button
            type="button"
            onClick={() => router.push("/Familia")}
            disabled={isFamilia}
          >
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <p
                  className={`inline-flex justify-center items-center mr-1 ${
                    isFamilia ? "text-gray-600" : ""
                  }`}
                >
                  <PlusIcon className="h-7 w-7" />
                </p>
                <span
                  className={`ml-2 text-sm font-semibold tracking-wide truncate ${
                    isFamilia ? "text-gray-600" : ""
                  }`}
                >
                  Familia
                </span>
              </div>
            </ComponentSidebarRedirect>
          </button>

          <button
            type="button"
            onClick={() => router.push("/Persona")}
            disabled={isPersona}
          >
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <p
                  className={`inline-flex justify-center items-center mr-1 ${
                    isPersona ? "text-gray-600" : ""
                  }`}
                >
                  <PlusIcon className="h-7 w-7" />
                </p>
                <span
                  className={`ml-2 text-sm font-semibold tracking-wide truncate ${
                    isPersona ? "text-gray-600" : ""
                  }`}
                >
                  Persona
                </span>
              </div>
            </ComponentSidebarRedirect>
          </button>

          <button
            type="button"
            onClick={() => router.push("/Asignacion")}
            disabled={isAsignacion}
          >
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <p
                  className={`inline-flex justify-center items-center mr-1 ${
                    isAsignacion ? "text-gray-600" : ""
                  }`}
                >
                  <PlusIcon className="h-7 w-7" />
                </p>
                <span
                  className={`ml-2 text-sm font-semibold tracking-wide truncate ${
                    isAsignacion ? "text-gray-600" : ""
                  }`}
                >
                  Asignacion
                </span>
              </div>
            </ComponentSidebarRedirect>
          </button>

          <button
            type="button"
            onClick={() => router.push("/TipoDocumento")}
            disabled={isTipoDocumento}
          >
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <p
                  className={`inline-flex justify-center items-center mr-1 ${
                    isTipoDocumento ? "text-gray-600" : ""
                  }`}
                >
                  <PlusIcon className="h-7 w-7" />
                </p>
                <span
                  className={`ml-2 text-sm font-semibold tracking-wide truncate ${
                    isTipoDocumento ? "text-gray-600" : ""
                  }`}
                >
                  Tipo Documento
                </span>
              </div>
            </ComponentSidebarRedirect>
          </button>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs text-gray-600 dark:text-gray-400">
          Copyright @2023 MrKoBP
        </p>
      </div>
    </div>
  );
}

export default SideBar;
