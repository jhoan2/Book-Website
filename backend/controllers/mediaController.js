const Media = require('../models/mediaModel');
const factory = require('./handlerFactory');

exports.getAllMedia = factory.getAll(Media);
exports.createMedia = factory.createOne(Media);
exports.updateMedia = factory.updateOne(Media);
exports.getMedia = factory.getOne(Media);
exports.deleteMedia = factory.deleteOne(Media);
