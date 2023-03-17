const express = require('express');
const cors = require('cors');
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

// to parse income data
app.use(express.json());

//enable CORS for all routes in the  application (i know it's not recommended )
app.use(cors());

// some useful middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use('/api/v1/pollution', pollution);

//  when other route than the endpoints routes,
//  display a nice message by return an html document
app.all('*', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

// as the name explains a global error handler
app.use(globalErrorHandler);

module.exports = app;
