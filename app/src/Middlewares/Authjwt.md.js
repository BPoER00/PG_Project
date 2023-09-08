import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../Models/Usuario.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provider" });

    const decoded = jwt.verify(token, config.SECRET);
    req.id = decoded.id;

    const userFound = await User.findById(req.id, { password: 0 });

    if (!userFound) return res.status(404).json({ message: "no user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: `Unauthorized` });
  }
};