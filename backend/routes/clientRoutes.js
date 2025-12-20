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

router.put("/:id", async (req, res) => {
  const updated = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Delete client error:", error);
    res.status(500).json({ message: "Failed to delete client" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, designation, description, image } = req.body;

    if (!name || !designation || !description || !image) {
      return res.status(400).json({ message: "All fields required" });
    }

    const client = new Client({
      name,
      designation,
      description,
      image,
    });

    await client.save();
    res.status(201).json(client);
  } catch (error) {
    console.error("POST client error:", error);
    res.status(500).json({ message: "Failed to add client" });
  }
});

module.exports = router;
