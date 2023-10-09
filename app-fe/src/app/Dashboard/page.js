"use client"
import DashboardProvider from "@/context/Dashboard.Context.js";
import Default from "@/components/Globales/Default.js";
import Info from "@/components/Dashboard/Info.js";
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
    <DashboardProvider>
      <Default>
        <Info />
      </Default>
    </DashboardProvider>
  );
}

export default page;
