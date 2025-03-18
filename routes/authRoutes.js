const express = require("express");
const { signup, login, changePassword } = require("../controller/authController");
const authMiddleware = require("../auth/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;
