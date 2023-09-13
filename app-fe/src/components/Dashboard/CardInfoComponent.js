function CardInfoComponent({ name, value, moneda }) {
  return (
    <div className="bg-blue-100 dark:bg-gray-200 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-300 dark:border-gray-300 text-gray-800 dark:text-gray-700 font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 transform group-hover:rotate-12"></div>
      <div className="text-right">
        <p
          className={`text-2xl ${
            value >= 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {moneda}
          {value}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CardInfoComponent;
