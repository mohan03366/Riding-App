const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "captain",
  },
  pickup: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  }, // in seconds

  distance: {
    type: Number,
  }, // in meters
  fair: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
    default: "pending",
  },

  paymentId: { type: String },
  orderId: { type: String },
  signature: { type: String },

  otp: { type: String, select: false, required: true },
});

module.exports = mongoose.model("rider", riderSchema);
//required: true
