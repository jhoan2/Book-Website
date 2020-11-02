const { Router } = require('express');
const express = require('express');
const router = require('router');
const { getAllMedia } = require('../controllers/mediaController');

router.route('/').getAllMedia()