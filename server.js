//Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const patientRoutes = require("./api/routes/newPatients");
const appointmentRoutes = require("./api/routes/appointments");

const MONGODB_URI =
  "mongodb+srv://memiller219:Jikmjikm_08@appointments-s6idr.mongodb.net/NEXUS?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost/nexus", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

//HTTP request logger
app.use(morgan("tiny"));
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Deploying to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes which should handle requests
app.use("/admin", patientRoutes);
app.use("/patient", appointmentRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
