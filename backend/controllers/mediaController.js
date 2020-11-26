import Media from '../models/mediaModel.js';
import {
  getAll,
  createOne,
  updateOne,
  getOne,
  deleteOne,
} from './handlerFactory.js';

const getAllMedia = getAll(Media);
const createMedia = createOne(Media);
const updateMedia = updateOne(Media);
const getMedia = getOne(Media);
const deleteMedia = deleteOne(Media);

export { getAllMedia, createMedia, updateMedia, getMedia, deleteMedia };
