import { config } from "dotenv";

config();

export default {
  URL_API: process.env.URL_API || "http://192.168.1.66:3000/api",
  SECRET_KEY: process.env.SECRET_KEY,
  COOKIE_KEY: process.env.COOKIE_KEY,
};
