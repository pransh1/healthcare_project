// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userController = require("../controllers/userControllers") // Correct path to modules



// Register a new user
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
module.exports = router;