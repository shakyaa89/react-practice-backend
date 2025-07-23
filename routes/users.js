var express = require("express");
const {
  registerUser,
  fetchUser,
  userLogin,
  deleteUser,
} = require("../controller/UserController");

var router = express.Router();

router.get("/", fetchUser);

router.post("/register", registerUser);

router.post("/login", userLogin);

router.delete("/:id", deleteUser);

module.exports = router;
