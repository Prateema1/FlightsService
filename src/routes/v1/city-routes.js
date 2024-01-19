const express = require('express');

const { CityController } = require('../../controllers');
const { AirplaneMiddleWare } = require('../../middlewares')

const router = express.Router();

// /api/v1/city POST
router.post('/', CityController.createCity);



module.exports = router;




