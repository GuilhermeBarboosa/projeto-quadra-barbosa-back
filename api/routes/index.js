const bodyParser = require('body-parser')
const campeonatosRoute = require('./campeonatosRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(campeonatosRoute)
}