var express = require('express');
var router = express.Router();
var controller = require('../controllers/audio-stream.controller.js');

router.get('/:name.m3u8', controller.get);
router.get('/:name', controller.get);
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

module.exports = router;
