const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  slot: {
    type: String
  },
  location: {
    type: String
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
