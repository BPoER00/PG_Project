import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new Schema(
  {
    familia_id: [
      {
        ref: "Familia",
        type: Schema.Types.ObjectId,
      },
    ],
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
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

usuarioSchema.statics.encryptPassword = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error al hashear el password ${error.message}`);
  }
};
usuarioSchema.statics.comparePassword = async (password, receivePassword) => {
  return await bcrypt.compare(password, receivePassword);
};

export default model("Usuario", usuarioSchema);
