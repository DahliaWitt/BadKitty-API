'use strict'

var controller = require('./twitter.controller.js');

var express = require('express');
var router = express.Router();
var cors = require('cors');

router.get('/*?', cors(), controller.get);

module.exports = router;
