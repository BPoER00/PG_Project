"use client";
import { useAsignacion } from "@/context/Asignacion.Context.js";

//components
import Steps from "./Steps.js";
import AsignacionList from "./AsignacionList.js";
import AsignacionNew from "./AsignacionNew.js";

function PersonaActions() {
  const { paginate } = useAsignacion();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <AsignacionList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <AsignacionNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default PersonaActions;
