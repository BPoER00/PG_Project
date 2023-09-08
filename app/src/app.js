import express from "express";
import morgan from "morgan";
import cors from "cors";

//rutas
import AuthRoutes from "./Routes/Auth.Routes.js";
import BitacoraAccesoRoutes from "./Routes/BitacoraAcceso.Routes.js";
import FamiliaRoutes from "./Routes/Familia.Routes.js";
import PersonaRoutes from "./Routes/Persona.Routes.js";
import TipoDocumentoRoutes from "./Routes/TipoDocumento.Routes.js";

const app = express();

//constantes
app.set("port", process.env.PORT || 3000);

//cors
const corsOptions = {};
app.use(cors(corsOptions));

//morgan
app.use(morgan("dev"));

//recibir datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.get("/", (req, res) => {
  res.json({
    name: "Garita Ramirez",
    author: "MrKoBP",
    description: "Proyecto de graduacion UMG",
    version: "1.0.0",
  });
});

app.use("/api/auth", AuthRoutes);

app.use("/api/bitacora", BitacoraAccesoRoutes);

app.use("/api/familia", FamiliaRoutes);

app.use("/api/persona", PersonaRoutes);

app.use("/api/documento", TipoDocumentoRoutes);

export default app;
