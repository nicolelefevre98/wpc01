const { Sequelize } = require('sequelize');

const connection = new Sequelize('pedrotech', 'root', 'zob4hSbUGSAM', {
  host: 'nicole.vps.webdock.cloud',
  dialect: 'mysql',
});

module.exports = connection;