

const CrudRepository = require("./crud-repository")
const Booking = require("../models/index")
const { Model } = require("sequelize")

class BookingRepository extends CrudRepository {

    constructor(){
        super(Booking)
    }
}

module.exports = {
    BookingRepository
}