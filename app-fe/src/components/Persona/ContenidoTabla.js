function ContenidoTabla({ data }) {
  return (
    <>
      {data.map((d, i) => (
        <tr key={i}>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.codigoIdentificacion}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.familia_id[0].nombre}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.tipoDocumento_id[0].nombre}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            <button
              className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white"
              onClick={() => alert(d._id)}
            >
              Mostrar
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ContenidoTabla;
