const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Patient = require("../models/newPatient");

// GET all patients
router.get("/patients", (req, res, next) => {
  Patient.find()
    .exec()
    .then(results => {
      res.status(200).json({
        count: results.length,
        patients: results
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// ADD new patients to DB
router.post("/addPatients", (req, res, next) => {
  const newPatient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });
  newPatient
    .save()
    .then(result => {
      res.status(201).json({
        message: "New patient added successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
