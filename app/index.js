const express = require("express")

const qrTagRoutes = require("./routes/qrTagRoutes")
const qrTagScanRoutes = require("./routes/qrTagScanRoutes")

const app = express()
const port = 8080

app.use("/qrTag", qrTagRoutes)
app.use("/qrTagScan", qrTagScanRoutes)

app.listen(port)
