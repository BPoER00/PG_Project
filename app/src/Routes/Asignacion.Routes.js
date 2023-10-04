import { Router } from "express";
import * as AsignacionController from "../Controllers/Persona.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import {
  checkPersonaExisted,
  checkTipoDocumentoExisted,
  checkDuplicateCodigoIdentificacion,
} from "../Middlewares/Asignacion.md.js";

const router = Router();

router.get("/", [verifyToken], AsignacionController.get);

router.post(
  "/",
  [
    verifyToken,
    checkDuplicateCodigoIdentificacion,
    checkPersonaExisted,
    checkTipoDocumentoExisted,
  ],
  AsignacionController.post
);

router.delete("/:id", [verifyToken], AsignacionController.deleted);

export default router;
