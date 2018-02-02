'use strict';
module.exports = (sequelize, DataTypes) => {
  var tabel2 = sequelize.define('tabel2', {
    idFilm2:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
  },
    descriere:
    {
        type:DataTypes.STRING,
    },
    anAparitie:
    {
        type:DataTypes.STRING,
    },
    gen:
    {
        type:DataTypes.STRING,
    },
    actori:
    {
        type:DataTypes.STRING,
    },
    nota:
    {
        type:DataTypes.STRING
    },
  },

      {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tabel2;
};
