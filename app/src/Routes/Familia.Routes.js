import { Router } from "express";
import * as FamiliaController from "../Controllers/Familia.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";
import { checkDuplicateNombreFamilia } from "../Middlewares/Familia.md.js";

const router = Router();

router.get("/", [verifyToken], FamiliaController.get);

router.post(
  "/",
  [checkDuplicateNombreFamilia],
  FamiliaController.post
);

router.put(
  "/:id",
  [verifyToken, checkDuplicateNombreFamilia],
  FamiliaController.put
);

router.delete("/:id", [verifyToken], FamiliaController.deleted);

export default router;
