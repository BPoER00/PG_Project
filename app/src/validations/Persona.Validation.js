import { object, string } from "yup";

export default object({
  codigoIdentificacion: string().required(),
  familia_id: string().required(),
  tipoDocumento_id: string().required(),
});
