'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admin', {
      idAdmin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admin');
  }
};
