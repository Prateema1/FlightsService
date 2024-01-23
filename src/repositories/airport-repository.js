const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(Airport);
    }
    }

module.exports = AirportRepository;