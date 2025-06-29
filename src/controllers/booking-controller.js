
const { StatusCodes } = require("http-status-codes")
const { BookingService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");


async function createBooking(req, res) {
    try {
        const flight = await BookingService.createBooking({
            flightId : req.body.flightId,
            noOfSeats: req.body.noOfSeats,
            userId: req.body.userId
        })
        SuccessResponse.data = flight; 
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}
module.exports = {
    createBooking
}