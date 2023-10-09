import mongoose from "mongoose";
import Asignacion from "../Models/Asignacion.js";
import Persona from "../Models/Persona.js";
import { ExtractIdToken } from "../Helpers/ExtractIdToken.js";

export const get = async (req, res) => {
  const familia_id = await ExtractIdToken(req.headers["x-access-token"]);

  const personas = await Persona.find({ familia_id: familia_id });

  const personaIds = personas.map((persona) => persona._id);

  await Asignacion.find({
    persona_id: { $in: personaIds },
  })
    .populate("persona_id", "nombre")
    .populate("tipoDocumento_id", "nombre")
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "Dato Obtenido Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Obtenido Correctamente, Error: ${error.message}`,
      });
    });
};

export const post = async (req, res) => {
  const { codigoIdentificacion, persona_id, tipoDocumento_id } = req.body;

  const asignacionNew = Asignacion({
    codigoIdentificacion,
    persona_id,
    tipoDocumento_id,
  });

  await asignacionNew
    .save()
    .then((data) => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};

export const deleted = async (req, res) => {
  const { id } = req.params;

  const asignacion = await Asignacion.findById(id);
  asignacion.estado = false;

  await asignacion
    .save()
    .then((data) => {
      res.status(201).json({
        data: data,
        message: "Dato Eliminado Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Eliminado Correctamente, Error: ${error.message}`,
      });
    });
};
