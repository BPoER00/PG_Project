"use client"
import TipoDocumentoProvider from "@/context/TipoDocumento.Context.js";
import Default from "@/components/Globales/Default";
import TipoDocumentoActions from "@/components/TipoDocumento/TipoDocumentoActions";
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
    <TipoDocumentoProvider>
      <Default>
        <TipoDocumentoActions />
      </Default>
    </TipoDocumentoProvider>
  );
}

export default page;
