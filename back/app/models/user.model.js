const db = require("./index.js");
const Sequelize = require("sequelize");

module.exports = function(sequelize) {

  const User = sequelize.define("user", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return User;
};
