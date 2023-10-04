import Persona from "../Models/Persona.js";
import TipoDocumento from "../Models/TipoDocumento.js";
import Asignacion from "../Models/Asignacion.js"

export const checkPersonaExisted = async (req, res, next) => {
  if (req.body.persona_id) {
    const personaObtenida = req.body.persona_id;
    const validation = [];

    const resultado = await Persona.findOne({ _id: personaObtenida });
    if (resultado === null) {
      validation.push(`Persona: ${personaObtenida} no existe`);
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

    const resultado = await TipoDocumento.findOne({
      _id: tipoDocumentoObtenida,
    });
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
  const persona = await Asignacion.findOne({
    codigoIdentificacion: req.body.codigoIdentificacion,
  });
  const validation = [];

  if (persona && persona._id.toString() !== req.params.id)
    validation.push(
      `El numero de identificacion: ${req.body.codigoIdentificacion} ya existe`
    );

  if (validation.length > 0) {
    return res.status(400).json({ message: validation });
  }

  next();
};
