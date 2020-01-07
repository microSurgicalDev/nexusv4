//Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

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

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Routes which should handle requests
app.use("/admin", patientRoutes);
app.use("/patient", appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
