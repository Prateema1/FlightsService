const { Sequelize } = require('sequelize');

const CrudRepository = require('./crud-repository');
const { Flights, Airplane, Airport, City} = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(Flights);
    }

     async getAllFlights(filter, sort) {
      const response = await Flights.findAll({
        where: filter,
        order: sort,
        include: [     // for join
          {
          model: Airplane,
          required: true,
          as: 'airplane_detail'
        },
        {
          model: Airport,
          required: true,
          as: 'departure_airport',
          on: {    // if we don't want join on primary key
            col1: Sequelize.where(Sequelize.col("Flights.departureAirportId"), "=", Sequelize.col("departure_airport.code")),
          },
          include: {
            model: City,
            required: true,

          }
        },

        {
          model: Airport,
          required: true,
          as: 'arrival_airport',
          on: {
            col1: Sequelize.where(Sequelize.col("Flights.arrivalAirportId"), "=", Sequelize.col("arrival_airport.code")),
          },
          include: {
            model: City,
            required: true,

          }
        }
      ]
      })
      return response;
     }
    }

module.exports = FlightRepository;