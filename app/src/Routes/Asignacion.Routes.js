import { Router } from "express";
import * as AsignacionController from "../Controllers/Asignacion.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import {
  checkAsignedExisted,
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
    checkAsignedExisted,
    checkDuplicateCodigoIdentificacion,
    checkPersonaExisted,
    checkTipoDocumentoExisted,
  ],
  AsignacionController.post
);

router.delete("/:id", [verifyToken], AsignacionController.deleted);

export default router;
