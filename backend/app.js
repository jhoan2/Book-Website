const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mediaRouter = require('./routes/mediaRoutes');

//Routes 
app.use('/api/v1/medias', mediaRouter);

module.exports = App
