function CardAll({ children }) {
  return (
    <div className="mt-4 mx-4">
      <div className="p-10 bg-blue-200 dark:bg-gray-400 dark:text-gray-800 border border-blue-300 dark:border-gray-300 rounded-lg shadow-md max-h-[75vh]">
        {children}
      </div>
    </div>
  );
}

export default CardAll;
