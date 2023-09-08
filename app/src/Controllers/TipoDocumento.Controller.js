import TipoDocumento from "../Models/TipoDocumento.js";

export const get = async (req, res) => {
  await TipoDocumento.find()
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
  const { nombre } = req.body;

  const tipoDocumentoNew = TipoDocumento({
    nombre,
  });

  await tipoDocumentoNew
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
