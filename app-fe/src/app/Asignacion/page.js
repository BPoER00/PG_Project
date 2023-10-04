import AsignacionProvider from "@/context/Asignacion.Context.js";
import Default from "@/components/Globales/Default";
import AsignacionActions from "@/components/Asignacion/AsignacionActions.js";

function page() {
  return (
    <AsignacionProvider>
      <Default>
        <AsignacionActions />
      </Default>
    </AsignacionProvider>
  );
}

export default page;
