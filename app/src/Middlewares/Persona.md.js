import Persona from "../Models/Persona.js";
import Usuario from "../Models/Usuario.js";

export const checkFamiliaExisted = async (req, res, next) => {
  if (req.body.familia_id) {
    const familiaObtenida = req.body.familia_id;
    const validation = [];

    const resultado = await Usuario.findOne({ _id: familiaObtenida });
    if (resultado === null) {
      validation.push(`Familia: ${familiaObtenida} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

export const checkDuplicateNombre = async (req, res, next) => {
  const persona = await Persona.findOne({ nombre: req.body.nombre });
  const validation = [];

  if (persona && persona._id.toString() !== req.params.id)
    validation.push(
      `El nombre de identificacion: ${req.body.nombre} ya existe en la base de datos`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};
