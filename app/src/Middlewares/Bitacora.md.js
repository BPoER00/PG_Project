import Persona from "../Models/Persona.js";

export const checkPersonaExisted = async (req, res, next) => {
  if (req.body.persona_id) {
    const personaObtenida = req.body.persona_id;
    const validation = [];

    const resultado = await Persona.findOne({
      codigoIdentificacion: personaObtenida,
    });
    if (resultado === null) {
      validation.push(`Persona: ${personaObtenida} no existe`);
    }

    if (validation.length > 0) {
      return res.status(400).json({ message: validation });
    }
  }

  next();
};
