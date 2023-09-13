function SidebarTitle({ name }) {
  return (
    <>
      <li className="px-5 hidden md:block">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-300 uppercase">
            {name}
          </div>
        </div>
      </li>
    </>
  );
}

export default SidebarTitle;
