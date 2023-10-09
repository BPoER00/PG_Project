import * as yup from "yup";

export const ValidateAsignacion = yup.object().shape({
  codigoIdentificacion: yup.string().required("Ingrese codigo"),
  persona_id: yup.string().required("Ingrese persona"),
  tipoDocumento_id: yup.string().required("Ingrese tipo documento"),
});
