const Professor = require("../model/ProfessorModel");

const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getProfessorById = async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);
    if (!professor)
      return res.status(404).json({ message: "Professor not found" });
    res.json(professor);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createProfessor = async (req, res) => {
  try {
    const professor = new Professor(req.body);
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

const updateProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!professor)
      return res.status(404).json({ message: "Professor not found" });
    res.json(professor);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

const deleteProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByIdAndDelete(req.params.id);
    if (!professor)
      return res.status(404).json({ message: "Professor not found" });
    res.json({ message: "Professor deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
