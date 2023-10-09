import BitacoraAcceso from "../Models/BitacoraAcceso.js";
import Asignacion from "../Models/Asignacion.js";
import dayjs from "dayjs";
import { ExtractIdToken } from "../Helpers/ExtractIdToken.js";
import Persona from "../Models/Persona.js";

export const get = async (req, res) => {
  const familia_id = await ExtractIdToken(req.headers["x-access-token"]);

  const personas = await Persona.find({ familia_id: familia_id });

  const personaIds = personas.map((persona) => persona._id);

  const asignaciones = await Asignacion.find({
    persona_id: { $in: personaIds },
  });

  const asignacionIds = asignaciones.map((asignacion) => asignacion._id);

  await BitacoraAcceso.find({ asignacion_id: { $in: asignacionIds } })
    .populate({
      path: "asignacion_id",
      populate: {
        path: "persona_id",
        select: "nombre",
      },
    })
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "Datos Obtenidos Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Datos No Fueron Obtenidos Correctamente, Error: ${error.message}`,
      });
    });
};

export const getGroupedByAsignacion = async (req, res) => {
  const familia_id = await ExtractIdToken(req.headers["x-access-token"]);

  const personas = await Persona.find({ familia_id: familia_id });

  const personaIds = personas.map((persona) => persona._id);

  const asignaciones = await Asignacion.find({
    persona_id: { $in: personaIds },
  });

  const asignacionIds = asignaciones.map((asignacion) => asignacion._id);

  try {
    const data = await BitacoraAcceso.aggregate([
      {
        $match: { asignacion_id: { $in: asignacionIds } },
      },
      {
        $lookup: {
          from: "asignacions", // Reemplaza con el nombre de la colección de asignaciones si es diferente
          localField: "asignacion_id",
          foreignField: "_id",
          as: "asignacion",
        },
      },
      {
        $unwind: "$asignacion",
      },
      {
        $lookup: {
          from: "personas",
          localField: "asignacion.persona_id",
          foreignField: "_id",
          as: "persona",
        },
      },
      {
        $unwind: "$persona",
      },
      {
        $group: {
          _id: "$asignacion_id",
          asignacion: { $first: "$asignacion" },
          nombrePersona: { $first: "$persona.nombre" }, // Nombre de la persona
          bitacoras: { $push: "$$ROOT" },
          countBitacoras: { $sum: 1 }, // Agrega esta línea para contar bitácoras
        },
      },
    ]);
    res.status(200).json({
      data: data,
      message: "Datos obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `Datos no fueron obtenidos correctamente, Error: ${error.message}`,
    });
  }
};

export const post = async (req, res) => {
  const { persona_id } = req.body;

  if (!persona_id)
    return res.status(403).json({ message: "Persona No Ingresada" });

  const asignacion = await Asignacion.find({
    codigoIdentificacion: persona_id,
  });

  console.log(asignacion);
  const fechaHora = dayjs(new Date());

  const fecha = fechaHora.format("YYYY-MM-DD");
  const hora = fechaHora.format("HH:mm:ss");

  const bitacoraNew = BitacoraAcceso({
    asignacion_id: asignacion[0]._id,
    fecha,
    hora,
  });

  await bitacoraNew
    .save()
    .then((data) => {
      res.status(201).json({
        data: data,
        message: "Dato Creado Correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};
