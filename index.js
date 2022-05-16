const express= require("express");
const bodyParser = require("body-parser")


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())
app.use(express.json)
// Listen on environment port or 5000
// app.use("/api", require("./js/auth"));
app.listen(port)