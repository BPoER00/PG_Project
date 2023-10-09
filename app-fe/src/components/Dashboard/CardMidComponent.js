import BarChart from "./BarChart";

function CardMidComponent({ nombre, data }) {
  console.log(data);
  return (
    <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-blue-100 dark:bg-gray-200 w-full shadow-lg rounded">
      <div className="rounded-t mb-0 px-0 border-0">
        <div className="flex flex-wrap items-center px-4 py-2">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-800 dark:text-gray-700">
              {nombre}
            </h3>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <BarChart name={nombre} data={data} />
        </div>
      </div>
    </div>
  );
}

export default CardMidComponent;
