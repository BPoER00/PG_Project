"use client"
import PersonaProvider from "@/context/Persona.Context.js";
import Default from "@/components/Globales/Default";
import PersonaActions from "@/components/Persona/PersonaActions";
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
    <PersonaProvider>
      <Default>
        <PersonaActions />
      </Default>
    </PersonaProvider>
  );
}

export default page;
