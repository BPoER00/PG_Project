import { Schema, model } from "mongoose";

const tipoDocumentoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("TipoDocumento", tipoDocumentoSchema);
