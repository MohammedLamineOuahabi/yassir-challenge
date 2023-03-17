const fs = require('fs');
const axios = require('axios');

const catchAsync = require('../utils/catchAsync');
const { query } = require('../db/db');

/*************************************************************** */

const nearestCityPollutionByLatLon = async (lat, lon) => {
  const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.AIR_VISUAL_KEY}`;
  try {
    const response = await axios.get(apiUrl);

    return { status: 500, data: { Pollution: response.data?.data?.current?.pollution } };
  } catch (error) {
    console.log(error);
    return { status: 500, data: { message: 'Error fetching data from external API' } };
  }
};

const nearestCityPollutionByGPS = catchAsync(async (req, res, next) => {
  if (!req.query.latitude || !req.query.longitude) {
    return res.status(500).send({ message: 'please add latitude and longitude in your request.' });
  }
  const result = await nearestCityPollutionByLatLon(req.query.latitude, req.query.longitude);
  return res.status(result.status).json({ Result: result.data });
});

const mostPollutedDatetime = catchAsync(async (req, res, next) => {
  const q = `select ts,aqius  from air_quality where aqius= (SELECT MAX(aqius) FROM air_quality)`;
  const result = await query(q);
  console.log(result);
  return res.status(200).json({ Result: result[0] });
});

/*************************************************************** */

module.exports = { nearestCityPollutionByGPS, nearestCityPollutionByLatLon, mostPollutedDatetime };
