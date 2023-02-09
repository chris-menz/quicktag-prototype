const express = require("express")

const routes = require("./routes")

const app = express()
const port = 5001

app.set('view engine', 'ejs')

app.use("/", routes)

app.listen(port)