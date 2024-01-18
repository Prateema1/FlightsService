const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(Airplane);
    }
    }

module.exports = AirplaneRepository;