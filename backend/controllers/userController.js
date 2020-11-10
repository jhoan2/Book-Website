const User = require('../models/userModel');
const factory = require('./handlerFactory');

exports.createUser = factory.createOne(User);
exports.getUser = factory.getOne(User);
exports.deleteUser = factory.deleteOne(User);
exports.updateUser = factory.updateOne(User);
exports.getAllUsers = factory.getAll(User);
