'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tabel3', {
      idBilet: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film: {
        type: Sequelize.STRING
      },
      bileteDisponibile: {
        type: Sequelize.STRING
      },
      bileteVandute: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tabel3');
  }
};
