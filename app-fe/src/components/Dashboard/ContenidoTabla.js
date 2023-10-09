function ContenidoTabla({ data }) {
  return (
    <>
      {data.map((d, i) => (
        <tr key={i}>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.asignacion_id[0].persona_id[0].nombre}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.fecha}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">
            {d.hora}
          </td>
        </tr>
      ))}
    </>
  );
}

export default ContenidoTabla;
