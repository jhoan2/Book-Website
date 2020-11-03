const express = require('express');
const router = require('router')
const { getAllMedia } = require('../controllers/mediaController');

router.route('/api/v1/media').get(getAllMedia)