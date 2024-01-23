const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');

const { ErrorResponse, SuccessResponse } = require('../utils/common');


/**
 * POST: /airports
 * req-body {name: 'IGI', code: 'DEL', cityID: 2}
 */

async function createAirport(req, res) {
    try {
     const airport = await AirportService.createAirport({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        city_id: req.body.city_id
     });
     SuccessResponse.data = airport;
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
 * GET: /airports
 * req-body {}
 */

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
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
 * GET: /airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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
 * DELETE: /airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
    try {
        const airports = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airports;
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
 * PATCH: /airports/:id
 * req-body {name: 'BLR'}
 */
async function updateAirport(req, res) {
    try {
        const airports = await AirportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = airports;
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}