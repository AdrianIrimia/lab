'use strict';
module.exports = (sequelize, DataTypes) => {
  var tabel3 = sequelize.define('tabel3', {
    idBilet:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    film:
    {
       type: DataTypes.STRING,
        allowNull:false
    },
    bileteDisponibile:
    {
        type:DataTypes.STRING,
        allowNull:true
    },
    bileteVandute:
    {
        type:DataTypes.STRING,
        allowNull:true
    }

  },
    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tabel3;
};
