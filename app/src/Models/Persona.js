import { Schema, model } from "mongoose";

const personaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    familia_id: [
      {
        ref: "Familia",
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
