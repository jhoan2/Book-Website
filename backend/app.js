const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const cors = require('cors');

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
// Set Security HTTP headers
app.use(helmet());

// Limit the requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: 'Too many requests from this IP. Please try again in an hour',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Sanitization of data against NoSQL injection
app.use(mongoSanitize());
// Data snitization against cross site scripting attacks
app.use(xss());
// Preven parameter pollution
app.use(
  hpp({
    white: ['ratingsAverage'],
  })
);

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
