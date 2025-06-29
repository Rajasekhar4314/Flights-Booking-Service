const axios = require("axios")
const { StatusCodes } = require("http-status-codes")
const { AppError } = require("../utils/errors/app-error");
const { ServerConfig }  = require("../config/index")
const { BookingRepository } = require("../repositories/index")
const bookingRepository = new BookingRepository()

const db = require("../models/index");


async function createBooking(data) {
    const transaction = await db.sequelize.transaction();
    try {
        const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`)
        const flightData = flight.data.data;

        if(data.noOfSeats > flightData.totalSeats){
            throw new AppError("requested no of seats not available", StatusCodes.INTERNAL_SERVER_ERROR)
        }
        const totalBillingAmount = data.noOfSeats * flightData.price;
        const bookingPayload = {...data, totalCost: totalBillingAmount};
        const booking = await bookingRepository.createBooking(bookingPayload, transaction);

        await axios.patch(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}/seats`, {
            seats: data.noOfSeats
        });

        await transaction.commit();
        return booking
        
    } catch (error) {

        await transaction.rollback();
        // Server Errors
        // throw new AppError("can't create a new Booking object", StatusCodes.INTERNAL_SERVER_ERROR)    
        throw error;

    }
}

module.exports = {
    createBooking
}