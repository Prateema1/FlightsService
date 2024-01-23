const CrudRepository = require('./crud-repository');
const { Flights } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(Flights);
    }
    }

module.exports = FlightRepository;