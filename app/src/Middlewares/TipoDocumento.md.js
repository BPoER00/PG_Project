import TipoDocumento from "../Models/TipoDocumento.js";

export const checkDuplicateNombreFamilia = async (req, res, next) => {
  const tipoDocumento = await TipoDocumento.findOne({
    nombre: req.body.nombre,
  });
  const validation = [];

  if (tipoDocumento && tipoDocumento._id.toString() !== req.params.id)
    validation.push(
      `El nombre: ${req.body.nombre} ya existe en la base de datos con el id ${tipoDocumento._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};
