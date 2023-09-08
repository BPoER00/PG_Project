import { Schema, model } from "mongoose";

const bitacoraAccesoSchema = new Schema(
  {
    persona_id: [
      {
        ref: "Persona",
        type: Schema.Types.ObjectId,
      },
    ],
    fecha: {
      type: String,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("BitacoraAcceso", bitacoraAccesoSchema);
