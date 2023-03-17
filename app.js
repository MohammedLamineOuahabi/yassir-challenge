const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const pollution = require('./routes/pollutionRouter');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + '/public'));

// Test middleware
app.use((req, res, next) => {
  //req.requestTime = new Date().toISOString();
  console.log(req.body);
  next();
});

//  Server UTC time
app.get('/api/time', (req, res) => {
  res.send({ time: new Date().toISOString() });
});

app.use('/api/v1/pollution', pollution);

//  when other route than the endpoints routes,
//  display a nice message by return an html document
app.all('*', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.use(globalErrorHandler);

module.exports = app;
