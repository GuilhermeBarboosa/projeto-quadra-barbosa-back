const { Router } = require('express');
const timecampeonatoController = require('../controller/timecampeonatoController');

const router = Router();

router.get('/timecampeonato', timecampeonatoController.getAll);
router.get('/timecampeonato/:id', timecampeonatoController.getById);
router.get('/timecampeonato/getPartidas/:id', timecampeonatoController.getTimes);
router.post('/timecampeonato', timecampeonatoController.create);
router.put('/timecampeonato/:id', timecampeonatoController.update);
router.delete('/timecampeonato/:id', timecampeonatoController.delete);

module.exports = router;