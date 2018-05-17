const express = require('express');
const message = require('./message/index');
const router = express.Router();

router.use('/', message);


module.exports = router;