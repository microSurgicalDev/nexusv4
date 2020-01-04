const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Appointment = require("../models/appointment");

// GET all appointments
router.get("/appointments", (req, res, next) => {
  Appointment.find()
    .exec()
    .then(results => {
      res.status(200).json({
        count: results.length,
        appointments: results
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// ADD new appointment to DB
router.post("/appointments", (req, res, next) => {
  const newAppointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    date: req.body.date,
    slot: req.body.slot,
    location: req.body.location,
    phone: req.body.phone
  });
  newAppointment
    .save()
    .then(result => {
      res.status(201).json({
        message: "New appointment added successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
