import express from "express";
import 'dotenv/config';
import workoutRoutes from "./routes/cards.js"

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});
app.use("/api/cards", workoutRoutes);

app.listen(port, () => {
    console.log(`Listening on port`, port)
});

