const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateAccessToken = (user) => {
  return jwt.sign({ user }, config.jwtSecret, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ user }, config.refreshTokenSecret, { expiresIn: "7d" });
};
