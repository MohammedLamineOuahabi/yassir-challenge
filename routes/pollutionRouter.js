const express = require('express');
// const Joi = require('joi');
// const { auth,  } = require('../middleware/auth');
const cityPollutionController = require('../controllers/pollutionController');

const router = express.Router();

router.get('/', cityPollutionController.nearestCityPollutionByGPS);
router.get('/mostPollutedDatetime', cityPollutionController.mostPollutedDatetime);

module.exports = router;
