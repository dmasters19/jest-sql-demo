const { Sequelize } = require('sequelize');

const createDatabase = async function(){
  const sequelize = new Sequelize('', 'root', 'local', {
    host: 'localhost',
    dialect: 'mysql'
  });
  await sequelize.query('DROP DATABASE IF EXISTS demo');
  await sequelize.query('CREATE DATABASE demo');
  await sequelize.close();
}

const sequelize = new Sequelize('demo', 'root', 'local', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
  createDatabase,
  sequelize
}
