import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function NavBar() {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-gray-900 dark:text-gray-200 z-10">
      <div className="flex justify-end items-center w-full h-14 bg-blue-200 dark:bg-gray-400 header-right">
        <Link href={"/Logout"}>
          <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-300 dark:hover:bg-gray-500 text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span className="inline-flex justify-center items-center ml-4"></span>
            <span className="ml-2 text-sm font-semibold tracking-wide truncate">
              <div className="flex items-end">
                <ArrowLeftCircleIcon className="h-6 w-6 mr-2" />
                <span>Logout</span>
              </div>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
