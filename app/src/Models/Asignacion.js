import { Schema, model } from "mongoose";

const asignacionSchema = new Schema(
  {
    codigoIdentificacion: {
      type: String,
      required: true,
      unique: true,
    },
    persona_id: [
      {
        ref: "Persona",
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

export default model("Asignacion", asignacionSchema);
