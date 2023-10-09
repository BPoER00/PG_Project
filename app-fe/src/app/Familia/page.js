"use client"
import FamiliaProvider from "@/context/Familia.Context.js";
import Default from "@/components/Globales/Default";
import FamiliaActions from "@/components/Familia/FamiliaActions";
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
    <FamiliaProvider>
      <Default>
        <FamiliaActions />
      </Default>
    </FamiliaProvider>
  );
}

export default page;
