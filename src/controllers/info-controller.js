
const { StatusCodes } =  require("http-status-codes")

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success : true,
        msg : "api is live",
        error : {},
        data : {}
    })
}

module.exports = {
    info
}