
const express = require("express");

const router = express.Router();

const bookingRoutes = require("./booking-routes")

router.get("/info", (req, res) => {
    return res.json({msg : "Ok"})
})


router.use("/bookings", bookingRoutes)


module.exports = router;