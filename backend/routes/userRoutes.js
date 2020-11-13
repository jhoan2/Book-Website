const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require('../controllers/userController');

const {
  signUp,
  login,
  restrictTo,
  protect,
} = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/login', login);
router.use(protect);
router.use(restrictTo('admin'));
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
