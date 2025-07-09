const express = require("express");
const router = express.Router();
const upload = require("../uploads/upload");
const controller = require("../controllers/candidate.controller");

router.post("/", upload.single("resume"), controller.createCandidate);
router.get("/", controller.getCandidates);
router.put("/:id/status", controller.updateStatus);
router.delete("/:id", controller.deleteCandidate); // optional

module.exports = router;
