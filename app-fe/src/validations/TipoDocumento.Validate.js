import * as yup from "yup";

export const ValidateTipoDocumento = yup.object().shape({
  nombre: yup.string().required("Ingrese un nombre de Documento"),
});