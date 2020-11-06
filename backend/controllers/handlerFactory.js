const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
// const AppError = require('../utils/appError');

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
