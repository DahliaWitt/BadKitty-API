'use strict'

var controller = require('./twitter.controller.js');

var express = require('express');
var router = express.Router();

router.get('/*?', controller.get);

module.exports = router;
