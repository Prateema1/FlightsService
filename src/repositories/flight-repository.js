const CrudRepository = require('./crud-repository');
const { Flights } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(Flights);
    }

     async getAllFlights(filter, sort) {
      const response = await Flights.findAll({
        where: filter,
        order: sort
      })
      return response;
     }
    }

module.exports = FlightRepository;