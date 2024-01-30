const { Sequelize } = require('sequelize');

const CrudRepository = require('./crud-repository');
const { Flights, Airplane, Airport, City} = require('../models');
const db = require('../models');
const { addRowLockOnFlights } = require('./queries');

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

     async updateRemainingSeats(flightId, seats, dec = true) {
      const transaction = await db.sequelize.transaction();
      try {
        await db.sequelize.query(addRowLockOnFlights(flightId));  // row level lock using FOR UPDATE
        const flight = await Flights.findByPk(flightId);
        if(+dec) {
          await flight.decrement('totalSeats', {by: seats}, {transaction: transaction});
        } else {
          await flight.increment('totalSeats', {by: seats}, {transaction: transaction});
        }
        await transaction.commit();
        return flight;
      } catch(error) {
        await transaction.rollback();
        throw error;
      }
    }
      
    }

module.exports = FlightRepository;