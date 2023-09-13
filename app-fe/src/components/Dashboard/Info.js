"use client";
import { useEffect, useState } from "react";

import CardInfoComponent from "./CardInfoComponent.js";
import CardMidComponent from "./CardMidComponent.js";
import CardFootComponent from "./CardFootComponent.js";

import { useDashboard } from "@/context/Dashboard.Context.js";

function Info() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <CardInfoComponent name={"Familias"} value={123} />
        <CardInfoComponent
          name={"Personas"}
          value={1234}
        />
        <CardInfoComponent
          name={"Tipos Documentos"}
          value={1234}
        />
        <CardInfoComponent
          name={"Bitacora"}
          value={1234}
        />
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <CardMidComponentDashboard nombre={"Dinero"} data={graficaDinero} />
        <CardMidComponentDashboard nombre={"Autos"} data={grapAutosData} />
      </div> */}

      <div className="mt-8 mx-4">
        <CardFootComponent />
      </div>
    </>
  );
}

export default Info;