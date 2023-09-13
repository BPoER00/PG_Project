function CardFootComponent() {
  return (
    <div className="p-4 bg-blue-100 dark:bg-gray-200 dark:text-gray-800 border border-blue-300 dark:border-gray-300 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">
        Bryan Emanuel Paz Ramirez - 1190-19-3929
      </h4>
      <ul>
        <li className="mt-3">
          <a
            className="flex items-center text-blue-500 dark:text-gray-700"
            href="https://github.com/BPoER00/PG_Project"
            target="_blank"
          >
            <span className="inline-flex pl-2">Repositorio Del Proyecto</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFootComponent;
