const { Router } = require('express');
const timesController = require('../controller/timesController');

const router = Router();

router.get('/times', timesController.getAll);
router.get('/times/:id', timesController.getById);
router.post('/times', timesController.create);
router.put('/times/:id', timesController.update);
router.delete('/times/:id', timesController.delete);

module.exports = router;