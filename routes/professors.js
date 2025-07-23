const express = require("express");
const {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor,
} = require("../controller/ProfessorController");

const router = express.Router();

router.get("/", getAllProfessors);
router.get("/:id", getProfessorById);
router.post("/", createProfessor);
router.put("/:id", updateProfessor);
router.delete("/:id", deleteProfessor);

module.exports = router;
