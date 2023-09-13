import EscaneoProvider from "@/context/Escaneo.Context.js";
import ParteEscaneo from "@/components/Escaneo/ParteEscaneo.js";

function page() {
  return (
    <EscaneoProvider>
      <ParteEscaneo />
    </EscaneoProvider>
  );
}

export default page;
