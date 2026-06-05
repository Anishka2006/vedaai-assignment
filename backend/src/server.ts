import express from "express";
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./config/db");
const assignmentRoutes = require("./routes/assignment.routes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("Backend Working");
});


app.use(
 "/api/assignments",
 assignmentRoutes
);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
