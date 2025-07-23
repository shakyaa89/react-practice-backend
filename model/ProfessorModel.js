const mongoose = require("mongoose");

const ProfessorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String },
  email: { type: String },
  bio: { type: String },
});

const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;
