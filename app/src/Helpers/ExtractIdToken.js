import { jwtVerify } from "jose";
import config from "../config.js";
import Usuario from "../Models/Usuario.js";

export const ExtractIdToken = async (token) => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(config.SECRET)
  );

  const familia_id = payload.id;

  const resultado = await Usuario.findOne({ _id: familia_id });

  return resultado.familia_id[0]?.toString();
};
