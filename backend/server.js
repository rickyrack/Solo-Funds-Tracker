const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/loans", require("./routes/loanRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
