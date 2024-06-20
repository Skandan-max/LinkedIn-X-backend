const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwtUtils");
