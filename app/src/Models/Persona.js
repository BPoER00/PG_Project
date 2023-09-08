import { Schema, model } from "mongoose";

const personaSchema = new Schema(
  {
    codigoIdentificacion: {
      type: String,
      required: true,
      unique: true,
    },
    familia_id: [
      {
        ref: "Familia",
        type: Schema.Types.ObjectId,
      },
    ],
    tipoDocumento_id: [
      {
        ref: "TipoDocumento",
        type: Schema.Types.ObjectId,
      },
    ],
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Persona", personaSchema);
