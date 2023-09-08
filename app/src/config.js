import { config } from "dotenv";

config();

export default {
  mongodbURL:
    process.env.MONGODB_URI || "mongodb://172.17.0.2:27017/pgGarita",
  SECRET: process.env.SECRET_KEY,
};