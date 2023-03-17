const cron = require('node-cron');
const app = require('./app');
const cityPollutionController = require('./controllers/pollutionController');
const { connect, query } = require('./db/db');
connect();
const port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});

// Schedule a cron job to run every day at midnight
cron.schedule('*/1 * * * *', async () => {
  // Code to run at midnight goes here
  let result = await cityPollutionController.nearestCityPollutionByLatLon(48.856613, 2.352222);
  console.log(result.data);
  if (!result.data.Pollution || !result.data.Pollution.aqius || !result.data.Pollution.ts) {
    console.log('no valid data');
    return;
  }
  console.log(result.data.Pollution.ts);
  // console.log(`Received phone: ${req.body.phone}`);
  try {
    const q = `INSERT INTO air_quality (aqius,ts ) VALUES (?, STR_TO_DATE( ?,'%Y-%m-%dT%H:%i:%s.%fZ'))`;
    await query(q, [result.data.Pollution.aqius, result.data.Pollution.ts]);
  } catch (error) {
    // console.log(error);
  }
  // res.status(201).send('your request to join our startup added successfully!');
});
