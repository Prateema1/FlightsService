const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

const { ErrorResponse, SuccessResponse } = require('../utils/common');


/**
 * POST: /airplane
 * req-body {modelNumber: 'airbus a320', capacity: 180}
 */

async function createAirplane(req, res) {
    try {
     const airplane = await AirplaneService.createAirplane({
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity
     });
     SuccessResponse.data = airplane;
     return res
       .status(StatusCodes.CREATED)
       .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)

    }
}


/**
 * POST: /airplanes
 * req-body {modelNumber: 'airbus a320', capacity: 180}
 */

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
       .status(StatusCodes.OK)
       .json(SuccessResponse);
        

    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


/**
 * POST: /airplanes/:id
 * req-body {modelNumber: 'airbus a320', capacity: 180}
 */
async function getAirplane(req, res) {
    try {
        console.log("AT CONTROLLER", req.params.id)
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
       .status(StatusCodes.OK)
       .json(SuccessResponse);
        

    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}