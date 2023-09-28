import database from "../database/database.js";
import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
    const q = "SELECT * FROM nikismanager.cards"

    database.query(q, (error, data) => {
        if (error) return res.json(error)
        return res.json(data)
    })
});

router.get("/:id", (req, res) => {
    res.json({message: "GET single card"})
});

router.post("/", (req, res) => {
    const q = "INSERT INTO cards (`title`, `task`) VALUES (?)"
    const values = [req.body.title, req.body.task]

    database.query(q, [values], (error, data) => {
        if (error) return res.json(error)
        return res.json("Book created")
    })
});

router.delete("/:id", (req, res) => {
    res.json({ message: "DELETE a new card" });
});
router.patch("/:id", (req, res) => {
    res.json({ message: "PATCH a new card" });
});

export default router;