const { Router } = require('express');
const campeonatosController = require('../controller/campeonatosController');
const usersController = require('../controller/usersController');
const basicAuth = require('../config/basicAuth');
const roleslist = require('../config/roles');

const router = Router();
const uri = '/campeonatos'

// router.get('/campeonatos', usersController.verifyToken, basicAuth(roleslist.ADMIN), campeonatosController.getAll);
router.get(`${uri}`, campeonatosController.getAll);
router.get(`${uri}/:id`, campeonatosController.getById);
router.post(`${uri}`, campeonatosController.create);
router.put(`${uri}/:id`, campeonatosController.update);
router.delete(`${uri}/:id`, campeonatosController.delete);

module.exports = router;