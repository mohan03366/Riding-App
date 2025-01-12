const riderModel = require("../models/rider.model");
const mapService = require("./maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };
  console.log("distanceTime is", distanceTime);
  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance.value / 1000) * perKmRate.moto +
        (distanceTime.duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
}
//module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    return crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, "0");
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  userId,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!userId || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }
  console.log("all fields are", userId, pickup, destination, vehicleType);
  const fair = await getFare(pickup, destination);
  console.log("all fair is", fair);
  const rider = riderModel.create({
    userId,
    pickup,
    destination,
    otp: getOtp(6),
    fair: fair[vehicleType],
  });
  return rider;
};
