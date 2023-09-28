const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "GET all cards"})
});

router.get("/:id", (req, res) => {
    res.json({message: "GET single card"})
});

router.post("/", (req, res) => {
    res.json({ message: "POST a new card" });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "DELETE a new card" });
});
router.patch("/:id", (req, res) => {
    res.json({ message: "PATCH a new card" });
});

module.exports = router;