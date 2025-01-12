const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/db");
connectToDb();
const cookieParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.route");
const captainRoutes = require("./routes/captain.route");
const mapsRoutes = require("./routes/map.route");
const rideRoutes = require("./routes/rider.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.send(`<h1>hii developer</h1>`);
});
app.use("/user", userRoutes);
app.use("/captain", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/ride", rideRoutes);

module.exports = app;
