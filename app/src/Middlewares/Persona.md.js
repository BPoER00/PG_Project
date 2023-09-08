import Familia from "../Models/Familia.js";
import Persona from "../Models/Persona.js";
import TipoDocumento from "../Models/TipoDocumento.js"

export const checkFamiliaExisted = async (req, res, next) => {
  if (req.body.familia_id) {
    const familiaObtenida = req.body.familia_id;
    const validation = [];

    const resultado = await Familia.findOne({ _id: familiaObtenida });
    if (resultado === null) {
      validation.push(`Familia: ${familiaObtenida} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

export const checkTipoDocumentoExisted = async (req, res, next) => {
  if (req.body.tipoDocumento_id) {
    const tipoDocumentoObtenida = req.body.tipoDocumento_id;
    const validation = [];

    const resultado = await TipoDocumento.findOne({ _id: tipoDocumentoObtenida });
    if (resultado === null) {
      validation.push(`Tipo Documento: ${personaObtenida} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};

export const checkDuplicateCodigoIdentificacion = async (req, res, next) => {
  const persona = await Persona.findOne({ codigoIdentificacion: req.body.codigoIdentificacion });
  const validation = [];

  if (persona && persona._id.toString() !== req.params.id)
    validation.push(
      `El numero de identificacion: ${req.body.codigoIdentificacion} ya existe en la base de datos con el id ${persona._id}`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};
