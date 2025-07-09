const Candidate = require("../models/candidate.model");
const path = require("path");

exports.createCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    const resumePath = req.file ? path.join("uploads", req.file.filename) : "";

    const candidate = new Candidate({ name, email, phone, jobTitle, resume: resumePath });
    await candidate.save();

    res.status(201).json(candidate);
  } catch (err) {
    res.status(500).json({ error: "Failed to create candidate" });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch candidates" });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const candidate = await Candidate.findByIdAndUpdate(id, { status }, { new: true });
    res.json(candidate);
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.findByIdAndDelete(id);
    res.json({ message: "Candidate deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete candidate" });
  }
};
