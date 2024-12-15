const express = require("express");

const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post(
  "/register",

  userController.registerUser
);

module.exports = router;
