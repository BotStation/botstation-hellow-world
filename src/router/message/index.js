const router = require('express').Router();
const controller = require('./message.controller');


router.post('/webhook', controller.webhook);

module.exports = router;