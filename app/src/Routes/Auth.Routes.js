import { Router } from "express";
import * as AuthController from "../Controllers/Auth.Controller.js";

const router = Router();

router.post("/", AuthController.singIn);

export default router;
