'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    idUser:
    {
       type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
  },
    username:
    {
        type:DataTypes.STRING,
        allowNull:false,
  },
      password:
   {
       type:DataTypes.STRING,
       allowNull:false,
  },

  },
      {
    classMethods: {
      associate: function(models) {
        user.hasMany(models.tabel3,{
            foreignKey:'idBilet'
        })

      }
    }
  });
  return user;
};
