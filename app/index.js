const express = require("express")

const qrCodeRoutes = require("./routes/qrCodeRoutes")
const qrCodeScanRoutes = require("./routes/qrCodeScanRoutes")

const app = express()
const port = 8080

app.use("/qrCode", qrCodeRoutes)
app.use("/qrCodeScan", qrCodeScanRoutes)

app.listen(port)
