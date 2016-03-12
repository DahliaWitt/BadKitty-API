'use strict'

var controller = require('./twitter.controller.js');

var express = require('express');
var router = express.Router();

router.get('/*?', controller.get);
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

module.exports = router;
