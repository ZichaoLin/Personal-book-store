const express = require("express");
const router = express.Router();
const loginHandle = require('./Handle/login');


router.post('/', loginHandle);

module.exports = router;