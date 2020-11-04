const morgan = require('morgan');
const express = require('express');
const path = require('path');

const app = express();
const mediaRoute = require('./routes/mediaRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/media', mediaRoute);

module.exports = app;
