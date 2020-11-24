import express from 'express';

import {
  getAllMedia,
  createMedia,
  updateMedia,
  getMedia,
  deleteMedia,
} from '../controllers/mediaController.js';

import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

router.use(protect);
router.use(restrictTo('admin'));
router.route('/').get(getAllMedia).post(createMedia);
router.route('/:id').patch(updateMedia).get(getMedia).delete(deleteMedia);

export default router;
