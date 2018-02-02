'use strict';
module.exports = (sequelize, DataTypes) => {
  var tabel1 = sequelize.define('tabel1', {
    idFilm1:
    {
       type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    denumireFilm:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    dataFilm:
    {
       type: DataTypes.STRING,
        allowNull:false
    },
    oraFilm:
    {
       type: DataTypes.STRING,
        allowNull: false
    },
    pretBilet:
    {
         type: DataTypes.STRING,
        allowNull:true
    },
  },
      {
    classMethods: {
      associate: function(models) {
        tabel1.hasMany(models.tabel2, {
            foreignKey:'idFilm2'
          })

      }
    }
  });
  return tabel1;
};
