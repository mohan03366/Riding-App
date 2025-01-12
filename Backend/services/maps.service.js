const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?units=imperial&origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const element = response.data.rows[0].elements[0];

      if (element.status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      const distanceInMeters = element.distance.value; // Value already in meters
      const durationInSeconds = element.duration.value; // Value already in seconds
      const distanceInKilometers = distanceInMeters / 1000; // Convert meters to kilometers
      const durationInMinutes = durationInSeconds / 60; // Convert seconds to minutes

      return {
        distance: {
          text: `${distanceInKilometers.toFixed(2)} km`,
          value: distanceInMeters,
        },
        duration: {
          text: `${Math.ceil(durationInMinutes)} mins`,
          value: durationInSeconds,
        },
      };
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getSuggestion = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
