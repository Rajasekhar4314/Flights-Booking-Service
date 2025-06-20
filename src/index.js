
const express = require("express")
const { ServerConfig, Logger} = require("./config/index")
const apiRoutes = require("./routes/index")
const app = express()

// console.log("port :", PORT)
const PORT = 3000;
app.use("/api", apiRoutes)

app.listen(PORT, () =>{
    console.log("app is running on Port :", PORT)
    Logger.info("successfully started server", "root", {});
})

