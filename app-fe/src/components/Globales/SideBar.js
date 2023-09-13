"use client";
import ComponentSidebarTitle from "./SidebarTitle.js";
import ComponentSidebarRedirect from "./SidebarRedirect.js";
import {
  HomeIcon,
  PlusIcon,
  ViewfinderCircleIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SideBar() {
  const router = useRouter();

  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-200 dark:bg-gray-400 h-full text-gray-900 dark:text-gray-300 transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <ComponentSidebarTitle name={"Opciones"} />

          <Link href={"/Dashboard"}>
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <span className="inline-flex justify-center items-center mr-1">
                  <HomeIcon className="h-7 w-7" />
                </span>
                <span className="ml-2 text-sm font-semibold tracking-wide truncate">
                  Home
                </span>
              </div>
            </ComponentSidebarRedirect>
          </Link>

          <button type="button" onClick={() => router.push("/Autos")}>
            <ComponentSidebarRedirect>
              <div className="flex items-center justify-between">
                <p className="inline-flex justify-center items-center mr-1">
                  <PlusIcon className="h-7 w-7" />
                </p>
                <span className="ml-2 text-sm font-semibold tracking-wide truncate">
                  Autos
                </span>
              </div>
            </ComponentSidebarRedirect>
          </button>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs text-gray-600 dark:text-gray-400">
          Copyright @2021 MrKoBP
        </p>
      </div>
    </div>
  );
}

export default SideBar;
