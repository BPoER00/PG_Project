import User from "../Models/Usuario.js";
import config from "../config.js";
import jwt from "jsonwebtoken";

export const singIn = async (req, res) => {
  const userFound = await User.findOne({
    usuario: req.body.username,
  });

  if (!userFound) return res.status(400).json({ message: "user not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "invalid password" });

  const token = jwt.sign({ id: userFound._id, }, config.SECRET, {
    expiresIn: 86400,
  });

  return res.status(200).json({
    token,
    message: "Login successful",
  });
};
