const express = require('express');
const morgan = require('morgan');

const mediaRouter = require('./routes/mediaRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/media', mediaRouter);
app.use('/api/v1/users', userRouter);

//HANDLING UNHANDLED ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`));
});

app.use(globalErrorHandler);
module.exports = app;
