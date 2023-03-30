const { Router } = require('express');
const jogadoresController = require('../controller/jogadoresController');

const router = Router();
const uri = '/jogadores'

router.get(`${uri}`, jogadoresController.getAll);
router.get(`${uri}/:id`, jogadoresController.getById);
router.get(`${uri}/getJogadorUser/:id`, jogadoresController.getByJogadorUser);
router.post(`${uri}`, jogadoresController.create);
router.put(`${uri}/:id`, jogadoresController.update);
router.delete(`${uri}/:id`, jogadoresController.delete);

module.exports = router;