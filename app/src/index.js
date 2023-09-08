import app from "./app.js";
import "./db.js";

//agregando el puerto;
app.listen(app.get("port"));

//mostramos compilacion
console.log(`server on port: ${app.get("port")}`);
