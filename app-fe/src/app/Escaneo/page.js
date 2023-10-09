"use client"
import EscaneoProvider from "@/context/Escaneo.Context.js";
import ParteEscaneo from "@/components/Escaneo/ParteEscaneo.js";
import { useEffect, useState } from "react";
import ProgresBar from "@/components/Inputs/ProgresBar";

function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <ProgresBar />;
  }

  return (
    <EscaneoProvider>
      <ParteEscaneo />
    </EscaneoProvider>
  );
}

export default page;
