const { Router } = require('express');
const posicoesController = require('../controller/posicoesController');

const router = Router();

router.get('/posicoes', posicoesController.getAll);
router.get('/posicoes/:id', posicoesController.getById);

module.exports = router;