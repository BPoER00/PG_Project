"use client"
import AsignacionProvider from "@/context/Asignacion.Context.js";
import Default from "@/components/Globales/Default";
import AsignacionActions from "@/components/Asignacion/AsignacionActions.js";
import ProgresBar from "@/components/Inputs/ProgresBar";
import { useEffect, useState } from "react";

function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <ProgresBar />;
  }

  return (
    <AsignacionProvider>
      <Default>
        <AsignacionActions />
      </Default>
    </AsignacionProvider>
  );
}

export default page;
