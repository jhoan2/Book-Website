const APIFeatures = require('../utils/apiFeatures');
const Media = require('../models/mediaModel');

exports.getAllMedia = async (res, req) => {
  try {
    const query = new APIFeatures(Media.find(), req.query)
      .sort()
      .filter()
      .page()
      .skip();
    const medias = await query.query;
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'ya did done wrong ',
      data: {
        medias,
      },
    });
  }
};
