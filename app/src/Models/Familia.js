import { Schema, model } from "mongoose";

const familiaSchema = new Schema(
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

export default model("Familia", familiaSchema);
