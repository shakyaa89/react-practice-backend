var express = require("express");
const {
  registerUser,
  fetchUser,
  userLogin,
} = require("../controller/UserController");

var router = express.Router();

router.get("/", fetchUser);

router.post("/register", registerUser);

router.post("/login", userLogin);

module.exports = router;
