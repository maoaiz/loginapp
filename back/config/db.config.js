module.exports = {
  HOST: "mysql_container",
  USER: "root",
  PASSWORD: "123456",   // OJO! debe ser la misma del docker-compose.yml
  DB: "loginapp_db",  // OJO! debe ser la misma del docker-compose.yml
  PORT: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
