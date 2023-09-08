import Familia from "../Models/Familia.js";

export const checkDuplicateNombreFamilia = async (req, res, next) => {
  const familia = await Familia.findOne({ nombre: req.body.nombre });
  const validation = [];

  if (familia && familia._id.toString() !== req.params.id)
    validation.push(
      `El nombre: ${req.body.nombre} ya existe en la base de datos con el id ${familia._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};
