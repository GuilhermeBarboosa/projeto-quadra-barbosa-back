const bodyParser = require('body-parser')
const campeonatosRoute = require('./campeonatosRoute')
const timesRoute = require('./timesRoute')
const usersRoute = require('./usersRoute')
const jogadoresRoute =  require('./jogadoresRoute')
const timecampeonatoRoute = require('./timecampeonatoRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(campeonatosRoute, timesRoute, usersRoute, jogadoresRoute, timecampeonatoRoute)
}