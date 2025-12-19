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

router.post("/", async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !description || !image) {
      return res.status(400).json({ message: "All fields required" });
    }

    const project = new Project({
      name,
      description,
      image,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error("POST project error:", error);
    res.status(500).json({ message: "Failed to add project" });
  }
});

module.exports = router;
