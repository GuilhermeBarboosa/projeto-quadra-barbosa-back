const { Router } = require('express');
const timecampeonatoController = require('../controller/timecampeonatoController');

const router = Router();
const uri = '/timecampeonato'

router.get(`${uri}`, timecampeonatoController.getAll);
router.get(`${uri}/:id`, timecampeonatoController.getById);
router.get(`${uri}/getPartidas/:id`, timecampeonatoController.getTimes);
router.post(`${uri}`, timecampeonatoController.create);
router.put(`${uri}/:id`, timecampeonatoController.update);
router.delete(`${uri}/:id`, timecampeonatoController.delete);

module.exports = router;