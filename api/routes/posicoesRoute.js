const { Router } = require('express');
const posicoesController = require('../controller/posicoesController');

const router = Router();
const uri = '/posicoes'

router.get(`${uri}`, posicoesController.getAll);
router.get(`${uri}/:id`, posicoesController.getById);

module.exports = router;