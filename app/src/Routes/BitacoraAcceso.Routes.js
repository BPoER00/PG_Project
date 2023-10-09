import { Router } from "express";
import * as BitacoraAccesoController from "../Controllers/BitacoraAcceso.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import { checkPersonaExisted } from "../Middlewares/Bitacora.md.js";

const router = Router();

router.get(
  "/AsignacionesGroup",
  [verifyToken],
  BitacoraAccesoController.getGroupedByAsignacion
);

router.get("/", [verifyToken], BitacoraAccesoController.get);

router.post("/", [checkPersonaExisted], BitacoraAccesoController.post);

export default router;
