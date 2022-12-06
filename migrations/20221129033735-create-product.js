'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Seller: {
        type: Sequelize.INTEGER
      },
      id_Category: {
        type: Sequelize.INTEGER
      },
      id_Shop: {
        type: Sequelize.INTEGER
      },
      Product_Name: {
        type: Sequelize.STRING
      },
      Descr_Product: {
        type: Sequelize.STRING
      },
      Quantity_Product: {
        type: Sequelize.INTEGER
      },
      Unit_Price: {
        type: Sequelize.INTEGER
      },
      Product_Pictures: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};