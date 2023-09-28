require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const workoutRoutes = require("./routes/cards");

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});
app.use("/api/cards", workoutRoutes);

app.listen(port, () => {
    console.log(`Listening on port`, port)
});

