const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const passport = require('passport');
const public_routes = require('./app/routes/public');
const payment_routes = require('./app/routes/payment');
const auth_routes = require('./app/routes/auth');
const users_routes = require('./app/routes/users');
require('./app/services');

const db = require("./app/models");
db.sequelize.sync();

// Add headers before the routes are defined
app.use(cors());

// Initializes passport and passport sessions
app.use(passport.initialize());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(public_routes); 
app.use(payment_routes);
app.use(auth_routes);
app.use('/users', users_routes);

app.listen(port, function() {
  console.log(`App listening the port [${port}]!`);
});



