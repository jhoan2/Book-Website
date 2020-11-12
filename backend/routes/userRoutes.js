const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require('../controllers/userController');

const { signUp, login } = require('../controllers/authController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);
router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;
