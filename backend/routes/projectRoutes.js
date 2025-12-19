const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Projects fetch error:", error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

module.exports = router;
