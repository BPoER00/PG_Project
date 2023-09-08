import { Router } from "express";
import * as PersonaController from "../Controllers/Persona.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import {
  checkFamiliaExisted,
  checkTipoDocumentoExisted,
  checkDuplicateCodigoIdentificacion,
} from "../Middlewares/Persona.md.js";

const router = Router();

router.get("/", [verifyToken], PersonaController.get);

router.post(
  "/",
  [
    verifyToken,
    checkDuplicateCodigoIdentificacion,
    checkFamiliaExisted,
    checkTipoDocumentoExisted,
  ],
  PersonaController.post
);

router.delete("/:id", [verifyToken], PersonaController.deleted);

export default router;
