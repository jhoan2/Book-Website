const express = require('express');

const {
  getAllMedia,
  createMedia,
  updateMedia,
  getMedia,
  deleteMedia,
} = require('../controllers/mediaController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.use(protect);
router.use(restrictTo('admin'));
router.route('/').get(getAllMedia).post(createMedia);
router.route('/:id').patch(updateMedia).get(getMedia).delete(deleteMedia);

module.exports = router;
