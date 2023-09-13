"use client";
import { useTipoDocumento } from "@/context/TipoDocumento.Context.js";

//components
import Steps from "./Steps.js";
import TipoDocumentoList from "./TipoDocumentoList.js";
import TipoDocumentoNew from "./TipoDocumentoNew.js";

function TipoDocumentoActions() {
  const { paginate } = useTipoDocumento();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <TipoDocumentoList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <TipoDocumentoNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default TipoDocumentoActions;
