import Familia from "../Models/Familia.js";
import Usuario from "../Models/Usuario.js";

export const get = async (req, res) => {
  await Familia.find()
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
  const { nombre, password } = req.body;

  const familiaNew = Familia({
    nombre,
  });

  const usuarioNew = Usuario({
    usuario: nombre,
    password: await Usuario.encryptPassword(password),
  });

  new Promise(async (resolve, reject) => {
    try {
      const NewData = await familiaNew.save();
      usuarioNew.familia_id = NewData._id;
      await usuarioNew.save();

      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};

export const put = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  new Promise(async (resolve, reject) => {
    try {
      const familia = await Familia.findById(id);
      familia.nombre = nombre;
      await familia.save();

      const usuario = await Usuario.findOne({ familia_id: id });
      usuario.nombre = nombre;
      await usuario.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
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

  new Promise(async (resolve, reject) => {
    try {
      const familia = await Familia.findById(id);
      familia.estado = false;
      await familia.save();

      const usuario = await Usuario.findOne({ familia_id: id });
      usuario.estado = false;
      await usuario.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        data: null,
        message: `Dato No Fue Creado Correctamente, Error: ${error.message}`,
      });
    });
};
