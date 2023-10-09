import { Router } from "express";
import * as PersonaController from "../Controllers/Persona.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import {
  checkDuplicateNombre,
  checkFamiliaExisted,
} from "../Middlewares/Persona.md.js";

const router = Router();

router.get("/", [verifyToken], PersonaController.get);

router.post(
  "/",
  [verifyToken, checkDuplicateNombre, checkFamiliaExisted],
  PersonaController.post
);

router.delete("/:id", [verifyToken], PersonaController.deleted);

export default router;
