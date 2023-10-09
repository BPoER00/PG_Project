import Persona from "../Models/Persona.js";
import { ExtractIdToken } from "../Helpers/ExtractIdToken.js";

export const get = async (req, res) => {
  const familia_id = await ExtractIdToken(req.headers["x-access-token"]);

  await Persona.find({ familia_id: familia_id })
    .populate("familia_id", "nombre")
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
  const { nombre } = req.body;

  const familia_id = await ExtractIdToken(req.headers["x-access-token"]);

  const personaNew = Persona({
    nombre,
    familia_id: familia_id,
  });

  await personaNew
    .save()
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};

export const deleted = async (req, res) => {
  const { id } = req.params;

  const persona = await Persona.findById(id);
  persona.estado = false;

  await persona
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
