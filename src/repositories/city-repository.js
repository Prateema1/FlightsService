const CrudRepository = require('./crud-repository');
const { City } = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        //calls constructor of parent class
        super(City);
    }
    }

module.exports = CityRepository;