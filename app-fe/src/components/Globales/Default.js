//components
import NavBar from "./NavBar.js";
import SideBar from "./SideBar.js";

function Default({ children }) {
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-blue-100 dark:bg-gray-200 text-gray-800 dark:text-gray-700">
        <NavBar />
        <SideBar />
        <main className="h-full ml-14 mt-14 mb-10 md:ml-64">{children}</main>
      </div>
    </div>
  );
}

export default Default;
