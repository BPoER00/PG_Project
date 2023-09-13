import * as yup from "yup";

export const ValidateLogin = yup.object().shape({
  username: yup.string().required("Ingrese un nombre de usuario"),
  password: yup.string().required("Ingrese un password de usuario"),
});