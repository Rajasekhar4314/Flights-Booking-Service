
const express = require("express")
const { ServerConfig, Logger} = require("./config/index")
const apiRoutes = require("./routes/index")
const app = express()

app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, () =>{
    console.log("app is running on Port :", ServerConfig.PORT)
    Logger.info("successfully started server", "root", {});
})

