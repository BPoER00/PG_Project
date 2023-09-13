import TipoDocumentoProvider from "@/context/TipoDocumento.Context.js";
import Default from "@/components/Globales/Default";
import TipoDocumentoActions from "@/components/TipoDocumento/TipoDocumentoActions";

function page() {
  return (
    <TipoDocumentoProvider>
      <Default>
        <TipoDocumentoActions />
      </Default>
    </TipoDocumentoProvider>
  );
}

export default page;
