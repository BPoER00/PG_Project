"use client";
import { useEffect, useState } from "react";

import CardInfoComponent from "./CardInfoComponent.js";
import CardMidComponent from "./CardMidComponent.js";
import CardFootComponent from "./CardFootComponent.js";

import { useDasboard } from "@/context/Dashboard.Context.js";
import LoadingBar from "../Inputs/LoadingBar.js";
import TableData from "../Globales/TableData.js";
import ContenidoTabla from "./ContenidoTabla.js";

function Info() {
  const { tablaBitacora, graficasBitacora } = useDasboard();
  const [data, setData] = useState([]);
  const [grafica, setGrafica] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await tablaBitacora());
    setGrafica(await graficasBitacora());
  };

  const cabeceras = ["Identificacion", "Fecha", "Hora"];

  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <CardInfoComponent name={"Familias"} value={123} />
        <CardInfoComponent name={"Personas"} value={1234} />
        <CardInfoComponent name={"Tipos Documentos"} value={1234} />
        <CardInfoComponent name={"Bitacora"} value={1234} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
        <div className="w-full max-h-[55vh] overflow-auto">
          {data.length === 0 ? (
            <div className="flex items-center justify-center">
              <div className="col-span-12">
                <div className="lg:overflow-visible">
                  <p>No se encontraron datos</p>
                </div>
              </div>
            </div>
          ) : (
            <TableData cabecera={cabeceras}>
              <ContenidoTabla data={data} />
            </TableData>
          )}
        </div>
        <CardMidComponent nombre={"Grafica de Datos En Tabla"} data={grafica} />
      </div>

      <div className="mt-8 mx-4">
        <CardFootComponent />
      </div>
    </>
  );
}

export default Info;
