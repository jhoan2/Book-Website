const express = require('express');

const {
  getAllMedia,
  createMedia,
  updateMedia,
  getMedia,
  deleteMedia,
} = require('../controllers/mediaController');

const router = express.Router();

router.route('/').get(getAllMedia).post(createMedia);
router.route('/:id').patch(updateMedia).get(getMedia).delete(deleteMedia);

module.exports = router;
