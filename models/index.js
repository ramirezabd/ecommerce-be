// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// const configdb = require(".././src/config/config_db");
const config = require(".././src/config/db.detail.js")
// import configDB from ".././src/config/config_db.js";
// import miolica from ".././src/config/config_db.js"
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

// const sequelizeMiolica = new Sequelize(miolica.DB,miolica.USER,miolica.PASSWORD, {
//   host: miolica.HOST,
//   dialect: miolica.dialect,
//   operatorAliases: false,

//   pool: {
//     max: miolica.pool.max,
//     min: miolica.pool.min,
//     acquire: miolica.pool.acquire,
//     idle: miolica.pool.idle,
//   },
// });


db.sequelize = sequelize;
db.sequelizeM = sequelizeMiolica;
db.Sequelize = Sequelize;

db.Cart = require("./cart")(sequelizeMiolica,Sequelize);
db.Category = require("./category")(sequelizeMiolica,Sequelize);
db.Checkout = require("./checkout")(sequelizeMiolica,Sequelize);
db.PersonalInfo = require("./personalinfo")(sequelizeMiolica,Sequelize);
db.Product = require("./product")(sequelizeMiolica,Sequelize);
db.Shop = require("./shop")(sequelizeMiolica,Sequelize);
db.ShipmentCharge = require("./shipmentcharge")(sequelizeMiolica,Sequelize);
db.Wishlist = require("./wishlist")(sequelizeMiolica,Sequelize);


db.Cart = require("./cart")(sequelize,Sequelize);
db.Category = require("./category")(sequelize,Sequelize);
db.Checkout = require("./checkout")(sequelize,Sequelize);
db.PersonalInfo = require("./personalinfo")(sequelize,Sequelize);
db.Product = require("./product")(sequelize,Sequelize);
db.Shop = require("./shop")(sequelize,Sequelize);
db.ShipmentCharge = require("./shipmentcharge")(sequelize,Sequelize);
db.Wishlist = require("./wishlist")(sequelize,Sequelize);

module.exports = db;
