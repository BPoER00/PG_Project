import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  mongoose
    .connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexión exitosa a MongoDB");
    })
    .catch((error) => {
      console.error("Error al conectar a MongoDB:", error);
    });
})();