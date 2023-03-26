const express = require('express')
const routes = require('./routes')
var cors = require('cors');

const app = express()
const port = 3000

app.use(cors());
routes(app)

app.listen(3000, () => {
    console.log("Server is running.")
})

module.exports = app