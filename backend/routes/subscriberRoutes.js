const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// SUBSCRIBE EMAIL
router.post("/", async (req, res) => {
  try {
    const existing = await Subscriber.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = new Subscriber(req.body);
    await subscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL SUBSCRIBERS (Admin)
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
