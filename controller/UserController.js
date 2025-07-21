const User = require("../model/UserModel");

const createUser = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const userData = new User({
    username,
    email,
    password,
  });

  await userData.save();

  res.status(201).json({
    message: "User Created Successfully!",
    user: userData,
  });
};

module.exports = createUser;
