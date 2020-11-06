const express = require('express');

const { getAllTours, createTour } = require('../controllers/mediaController');

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);

module.exports = router;
