
'use strict';
module.exports = (sequelize, DataTypes) => {
  var admin = sequelize.define('admin', {
    idAdmin:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
  },
    admin:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    pass:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
  },
      {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin;
};

