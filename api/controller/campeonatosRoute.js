const { Router } = require('express');
const campeonatosController = require('../controller/campeonatosController');

const router = Router();

router.get('/campeonatos', campeonatosController.getAll);
router.get('/campeonatos/:id', campeonatosController.getById);
router.post('/campeonatos', campeonatosController.create);
router.put('/campeonatos/:id', campeonatosController.update);
router.delete('/campeonatos/:id', campeonatosController.delete);

module.exports = router;