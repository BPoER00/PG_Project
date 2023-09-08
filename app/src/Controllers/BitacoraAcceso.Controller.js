import BitacoraAcceso from "../Models/BitacoraAcceso.js";
import Persona from "../Models/Persona.js";
import dayjs from "dayjs";

export const get = async (req, res) => {
  await BitacoraAcceso.find({ persona_id: req.params.id })
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

export const post = async (req, res) => {
  const { persona_id } = req.body;

  if (!persona_id)
    return res.status(403).json({ message: "Persona No Ingresada" });

  const persona = await Persona.find({ codigoIdentificacion: persona_id });

  const fechaHora = dayjs(new Date());

  const fecha = fechaHora.format("YYYY-MM-DD");
  const hora = fechaHora.format("HH:mm:ss");

  const bitacoraNew = BitacoraAcceso({
    persona_id: persona[0]._id,
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
