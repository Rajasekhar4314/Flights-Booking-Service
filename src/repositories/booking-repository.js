
const CrudRepository = require("./crud-repository")
const { Booking } = require("../models/index");

// console.log("booking :", Booking)


class BookingRepository extends CrudRepository {

    constructor(){
        super(Booking)
    }
    
    async createBooking(data, transaction) {
        const res = await Booking.create(data, {transaction : transaction})
        return res;
    }   
}

module.exports = BookingRepository;