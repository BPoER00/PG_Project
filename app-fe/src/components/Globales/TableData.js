function TableData({ children, cabecera }) {
  const elementosCabecera = [];
  for (let i = 0; i < cabecera.length; i++) {
    elementosCabecera.push(
      <th key={i} scope="col" className="p-4">
        <div className="flex items-center">{cabecera[i]}</div>
      </th>
    );
  }

  return (
    <div className="max-w-4x1 mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>{elementosCabecera}</tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {children}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableData;
