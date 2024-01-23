'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId'
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'code'
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'code'
      });
    }
  }
  Flights.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false
    },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    boardingGate: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};