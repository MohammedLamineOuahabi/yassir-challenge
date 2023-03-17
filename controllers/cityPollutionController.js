const fs = require('fs');
const axios = require('axios');

const catchAsync = require('../utils/catchAsync');
const { query } = require('../db/db');

/*************************************************************** */

const nearestCityPollutionByLatLon = async (lat, lon) => {
  console.log(lat, lon);
  const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.AIR_VISUAL_KEY}`;
  try {
    const response = await axios.get(apiUrl);
    let data = response.data;
    console.log(data);
    return { status: 500, data: { Pollution: data?.data?.current?.pollution } };
  } catch (error) {
    return { status: 500, data: { message: 'Error fetching data from external API' } };
  }
};
const nearestCityPollutionByGPS = catchAsync(async (req, res, next) => {
  if (!req.query.latitude || !req.query.longitude) {
    return res.status(500).send({ message: 'please add latitude and longitude in your request.' });
  }
  const result = await nearestCityPollutionByLatLon(req.query.latitude, req.query.longitude);
  return res.status(result.status).json({ Result: result.data });
  // console.log(`Received phone: ${req.body.phone}`);
  // const q = 'INSERT INTO leads (phone_number, type) VALUES (?, ?)';
  // await query(q, [req.body.phone, 'patient']);
  // res.status(201).send('your request to join our startup added successfully!');
});

/*************************************************************** */

module.exports = { nearestCityPollutionByGPS };
