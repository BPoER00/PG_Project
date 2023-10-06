import Persona from "../Models/Persona.js";
import Usuario from "../Models/Usuario.js";

export const get = async (req, res) => {
  await Persona.find()
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
  const { nombre, familia_id } = req.body;

  const resultado = await Usuario.findOne({ _id: familia_id });

  const personaNew = Persona({
    nombre,
    familia_id: [resultado.familia_id[0]?.toString()],
  });

  await personaNew
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
