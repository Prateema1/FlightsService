'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
    }
  }
  Airport.init({
    name: {
      type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    code:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }, 
    address: {
      type: Sequelize.STRING,
      unique: true
    },
    cityId: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};