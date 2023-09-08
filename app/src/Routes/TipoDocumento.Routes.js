import { Router } from "express";
import * as TipoDocumentoController from "../Controllers/TipoDocumento.Controller.js";
import { verifyToken } from "../Middlewares/Authjwt.md.js";

const router = Router();

router.get("/", [verifyToken], TipoDocumentoController.get);

router.post("/", [verifyToken], TipoDocumentoController.post);

export default router;
