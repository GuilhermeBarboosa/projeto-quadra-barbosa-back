const { Router } = require('express');
const jogadoresController = require('../controller/jogadoresController');

const router = Router();

router.get('/jogadores', jogadoresController.getAll);
router.get('/jogadores/:id', jogadoresController.getById);
router.post('/jogadores', jogadoresController.create);
router.put('/jogadores/:id', jogadoresController.update);
router.delete('/jogadores/:id', jogadoresController.delete);

module.exports = router;