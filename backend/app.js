const morgan = require('morgan');
const mediaRoute = require('./routes/mediaRoutes');
const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/media', mediaRoute);


module.exports = app