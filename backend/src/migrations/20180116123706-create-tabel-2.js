'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tabel2', {
      idFilm2: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descriere: {
        type: Sequelize.STRING
      },
      anAparitie: {
        type: Sequelize.STRING
      },
      gen: {
        type: Sequelize.STRING
      },
      actori: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tabel2');
  }
};
