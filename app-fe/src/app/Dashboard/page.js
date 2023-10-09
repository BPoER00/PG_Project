"use client"
import DashboardProvider from "@/context/Dashboard.Context.js";
import Default from "@/components/Globales/Default.js";
import Info from "@/components/Dashboard/Info.js";

function page() {
  return (
    <DashboardProvider>
      <Default>
        <Info />
      </Default>
    </DashboardProvider>
  );
}

export default page;
