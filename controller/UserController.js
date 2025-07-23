const User = require("../model/UserModel");

const registerUser = async (req, res) => {
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

const fetchUser = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (error) {
    console.error("Fetch users error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const userLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    res.json({
      message: "Login Successful!",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, fetchUser, userLogin, deleteUser };
