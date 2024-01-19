const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/city POST
router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity);

// /api/v1/city/:id DELETE
router.delete('/:id', CityController.destroyCity);

// /api/v1/city/:id PATCH
router.patch('/:id', CityController.updateCity);


module.exports = router;




