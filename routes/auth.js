const express = require("express");
const { register, login } = require("../controllers/authController");
const validateRegister = require("../middlewares/validateRegister");
const validateLogin = require("../middlewares/validateLogin");

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;