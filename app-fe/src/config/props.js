import { config } from "dotenv";

config();

// Ahora puedes acceder a las variables de entorno en tu código
const URL_API = process.env.URL_API || "http://192.168.1.66:3000/api";
const SECRET_KEY = process.env.SECRET_KEY || "pgDataSecret";
const COOKIE_KEY = process.env.COOKIE_KEY || "pgDataSecretCookie";

export { URL_API };
export { SECRET_KEY };
export { COOKIE_KEY };
