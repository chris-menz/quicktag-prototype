const express = require("express")
const redirectHandler = require("./handlers/redirect")

const app = express()
const port = 5001

app.set('view engine', 'ejs')

// redirect based on activation status of tag
app.get('/redirect/:tagid', redirectHandler)

app.use("/", browserRoutes)
app.use("/qrTag", qrTagRoutes)
app.use("/qrTagScan", qrTagScanRoutes)

app.listen(port)
