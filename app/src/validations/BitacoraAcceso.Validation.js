import { object, string } from "yup";

export default object({
  persona_id: string().required(),
  fecha: string().required(),
  hora: string().required(),
});
