
const express = require("express");

const router = express.Router();

const { InfoController } = require("../../controllers/index")

// router.get("/info", (req, res) => {
//     return res.json({msg : "Ok"})
// })
// http://localhost:3000/v1/info/
router.get("/info", InfoController.info)


module.exports = router;