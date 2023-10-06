import * as yup from "yup";

export const ValidatePersona = yup.object().shape({
  nombre: yup.string().required("Ingrese codigo"),
});
