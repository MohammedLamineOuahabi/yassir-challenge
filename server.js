const cron = require('node-cron');
const app = require('./app');
const { connect } = require('./db/db');
connect();
const port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});

// Schedule a cron job to run every day at midnight
cron.schedule('*/1 * * * *', () => {
  // Code to run at midnight goes here
  console.log('Running cron job at midnight');
});
