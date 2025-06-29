

const express = require("express")

const router = express.Router()

const { BookingController } = require("../../controllers/index")
// const { AirplaneMiddlewares } = require("../../middlewares/index")

//  /api/v1/bookings POST
router.post("/", BookingController.createBooking)

module.exports = router;
