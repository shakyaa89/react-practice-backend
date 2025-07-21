var express = require("express");
const createUser = require("../controller/UserController");
const User = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude password field
    res.json(users);
  } catch (error) {
    console.error("Fetch users error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/register", createUser);

module.exports = router;
