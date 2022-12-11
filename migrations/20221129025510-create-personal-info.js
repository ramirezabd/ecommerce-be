/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PersonalInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_Wishlist: {
        type: Sequelize.INTEGER,
      },
      id_Cart: {
        type: Sequelize.INTEGER,
      },
      Email: {
        type: Sequelize.STRING,
        unique: true,
      },
      Personal_Address: {
        type: Sequelize.STRING,
      },
      Profile_Picture: {
        type: Sequelize.BLOB,
      },
      Telephone: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      Gender: {
        type: Sequelize.STRING,
      },
      SALDO: {
        type: Sequelize.INTEGER,
      },
      Username: {
        type: Sequelize.STRING,
        unique: true,
      },
      Password: {
        type: Sequelize.STRING,
      },
      Role: {
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PersonalInfos");
  },
};
