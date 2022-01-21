const express = require('express');
// const User = require("../../models/user.model.js");
const db = require("../../models");
const User = db.User;
const router = express.Router();
require('dotenv').config();

router.get('/', function(req, res) {
  User.findAll()
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error))

});

router.post('/create', function(req, res) {
  console.log("New request GET to /");

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body)
  // Create a User
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };

  // Save User in the database
  User.create(user)
  .then(usuario => res.status(200).send(usuario))
  .catch(error => res.status(400).send(error))

});

module.exports = router
