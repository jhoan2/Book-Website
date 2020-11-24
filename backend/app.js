/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import bodyParser from 'body-parser';
import cors from 'cors';

import mediaRouter from './routes/mediaRoutes.js';
import userRouter from './routes/userRoutes.js';

import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();

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
export default app;
