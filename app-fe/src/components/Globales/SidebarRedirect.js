function SidebarRedirect({ children }) {
  return (
    <>
  <li>
    <div className="relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-200 dark:hover:bg-gray-400 hover:animate-bounce text-gray-900 dark:text-gray-300 hover:text-blue-700 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
      <span className="inline-flex justify-center items-center ml-4"></span>
      <span className="ml-2 text-sm font-semibold tracking-wide truncate">
        {children}
      </span>
    </div>
  </li>
</>

  );
}

export default SidebarRedirect;
