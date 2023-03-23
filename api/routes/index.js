const bodyParser = require('body-parser')
const campeonatosRoute = require('./campeonatosRoute')
const timesRoute = require('./timesRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(campeonatosRoute, timesRoute)
}