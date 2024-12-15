const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/db");
connectToDb();
const app = express();
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.send(`<h1>hii developer</h1>`);
});
app.use("/users", userRoutes);

module.exports = app;
