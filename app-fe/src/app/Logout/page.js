"use client"
import ProgresBar from "@/components/Inputs/ProgresBar";
import { useEffect } from "react";
import { deleteCookie } from "@/config/cookiesconfig"; 
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  useEffect(() => {
    deleteCookie();
    router.push("/Login");
  }, []);
  return <ProgresBar />;
}

export default page;