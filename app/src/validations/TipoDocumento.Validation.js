import { object, string } from "yup";

export default object({
  nombre: string().required(),
});
