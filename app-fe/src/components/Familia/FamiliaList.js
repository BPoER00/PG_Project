import { useState, useEffect } from "react";
import CardAll from "../Contenedores/CardAll.js";
import LoadingBar from "../Inputs/LoadingBar.js";
import TableData from "../Globales/TableData.js";
import ContenidoTabla from "./ContenidoTabla.js";
import { useFamilia } from "@/context/Familia.Context.js";

function FamiliaList() {
  const { familias } = useFamilia();
  const [data, setData] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await familias());
  };

  console.log(data);

  const cabeceras = ["Persona", "Opciones"];
  if (data.length === 0) {
    return (
      <>
        <CardAll>
          <div className="w-full max-h-[55vh] overflow-auto">
            <div className="flex items-center justify-center">
              <div className="col-span-12">
                <div className="lg:overflow-visible">
                  <p>No se encontraron datos</p>
                </div>
              </div>
            </div>
          </div>
        </CardAll>
      </>
    );
  }

  return (
    <CardAll>
      <div className="w-full max-h-[55vh] overflow-auto">
        {data.length === 0 ? (
          <LoadingBar />
        ) : (
          <TableData cabecera={cabeceras}>
            <ContenidoTabla data={data} />
          </TableData>
        )}
      </div>
    </CardAll>
  );
}

export default FamiliaList;
