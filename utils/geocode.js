const axios = require("axios").default;

const geocode = (address, callback) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=1&access_token=pk.eyJ1IjoiYXNoaXNobmFydXRvIiwiYSI6ImNreHBudHl5bzBibjYycW8yZ2hhZnowOHAifQ.jFtd8k-RTzbybotivkF8Kw`;
  (async () => {
    try {
      const response = await axios.get(geoUrl);
      callback(
        {
          latitude: response.data.features[0].center[0],
          longitude: response.data.features[0].center[1],
          location: response.data.features[0].place_name,
        },
        undefined
      );
    } catch (err) {
      callback(undefined, err);
    }
  })();
};

module.exports =   geocode;

