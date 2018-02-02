'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      username: {
        type: Sequelize.STRING,
          allowNull:false
      },
      password: {
        type: Sequelize.STRING,
          allowNull:false
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
