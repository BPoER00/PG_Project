import * as yup from "yup";

export const ValidateFamilia = yup.object().shape({
  nombre: yup.string().required("Ingrese un nombre de familia"),
  password: yup.string().required("Ingrese un password de familia"),
});