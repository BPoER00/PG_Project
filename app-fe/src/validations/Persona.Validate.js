import * as yup from "yup";

export const ValidatePersona = yup.object().shape({
  codigoIdentificacion: yup.string().required("Ingrese codigo"),
  familia_id: yup.string().required("Ingrese familia"),
  tipoDocumento_id: yup.string().required("Ingrese tipo documento"),
});
