module.exports = {
  HOST: "mysql_container",
  USER: "root",
  PASSWORD: "123456",
  DB: "loginapp_db",
  PORT: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
