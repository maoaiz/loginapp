const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', function(req, res) {
  console.log("New request GET to /");
  res.send('Do requests to /users ');
});

module.exports = router
