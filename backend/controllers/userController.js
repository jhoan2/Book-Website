import User from '../models/userModel.js';
import {
  getAll,
  createOne,
  updateOne,
  getOne,
  deleteOne,
} from './handlerFactory.js';

const createUser = createOne(User);
const getUser = getOne(User);
const deleteUser = deleteOne(User);
const updateUser = updateOne(User);
const getAllUsers = getAll(User);

export { createUser, getUser, deleteUser, updateUser, getAllUsers };
