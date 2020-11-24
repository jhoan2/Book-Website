import express from 'express';

import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} from '../controllers/userController.js';

import {
  signUp,
  login,
  restrictTo,
  protect,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.use(protect);
router.use(restrictTo('admin'));
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

export default router;
