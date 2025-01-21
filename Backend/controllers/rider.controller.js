const rideService = require("../services/rider.service");
const mapsService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/rider.model");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;
  try {
    // Step 1: Create the ride
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });

    // Step 2: Get pickup coordinates
    const pickupCoordinates = await mapsService.getAddressCoordinate(pickup);
    //console.log("hii", pickupCoordinates);

    // Step 3: Find captains in radius
    const captainInRadius = await mapsService.getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      5000
    );
    console.log("hey", captainInRadius);

    // Step 4: Populate the ride with user details
    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");
    //console.log("hello", rideWithUser);
    // Step 5: Notify captains via socket
    captainInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });

    // Send response after all operations are completed
    return res.status(201).json(ride);
  } catch (error) {
    // Handle any errors and send a response
    console.error("Error in createRide:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { rideId } = req.body;
  try {
    const ride = await rideService.confirmRide({
      rideId,
      captain: req.captain,
    });

    //console.log("Ride confirmed:", ride.user.socketId);

    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-confirmed",
      data: ride,
    });

    return res.status(200).json(ride);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
