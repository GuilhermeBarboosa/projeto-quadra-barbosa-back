const { Router } = require('express');
const timesController = require('../controller/timesController');

const router = Router();
const uri = '/times'

router.get(`${uri}`, timesController.getAll);
router.get(`${uri}/:id`, timesController.getById);
router.post(`${uri}`, timesController.create);
router.put(`${uri}/:id`, timesController.update);
router.delete(`${uri}/:id`, timesController.delete);

module.exports = router;