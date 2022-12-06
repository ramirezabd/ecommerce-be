'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Product: {
        type: Sequelize.INTEGER
      },
      id_Seller: {
        type: Sequelize.INTEGER
      },
      id_Shipment: {
        type: Sequelize.INTEGER
      },
      Shop_Name: {
        type: Sequelize.STRING
      },
      Descr_Shop: {
        type: Sequelize.STRING
      },
      Shop_Picture: {
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
    await queryInterface.dropTable('Shops');
  }
};