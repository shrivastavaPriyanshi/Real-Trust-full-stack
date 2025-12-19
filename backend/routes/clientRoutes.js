const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Clients fetch error:", error);
    res.status(500).json({ message: "Failed to fetch clients" });
  }
});

module.exports = router;
