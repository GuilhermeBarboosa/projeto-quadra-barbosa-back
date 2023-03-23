const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(3000, () => {
    console.log("Server is running.")
})

module.exports = app