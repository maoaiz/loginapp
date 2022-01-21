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

// UserModel.create = (newUserModel, result) => {
//   db.query("INSERT INTO users SET ?", newUserModel, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created user: ", { id: res.insertId, ...newUserModel });
//     result(null, { id: res.insertId, ...newUserModel });
//   });
// };

// UserModel.findById = (id, result) => {
//   db.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found user: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found UserModel with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// UserModel.remove = (id, result) => {
//   db.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found UserModel with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted user with id: ", id);
//     result(null, res);
//   });
// };

// UserModel.removeAll = result => {
//   db.query("DELETE FROM users", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} users`);
//     result(null, res);
//   });
// };

