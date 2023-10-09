import Asignacion from "../Models/Asignacion.js";

export const checkPersonaExisted = async (req, res, next) => {
  if (req.body.persona_id) {
    const personaObtenida = req.body.persona_id;
    const validation = [];

    const resultado = await Asignacion.findOne({
      codigoIdentificacion: personaObtenida,
    });
    if (resultado === null) {
      validation.push(`Persona: ${personaObtenida} no reconocida`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};
