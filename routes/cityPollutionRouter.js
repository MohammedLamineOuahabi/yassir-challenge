const express = require('express');
// const Joi = require('joi');
// const { auth,  } = require('../middleware/auth');
const cityPollutionController = require('../controllers/cityPollutionController');

const router = express.Router();

router.get('/', cityPollutionController.nearestCityPollutionByGPS);

module.exports = router;
