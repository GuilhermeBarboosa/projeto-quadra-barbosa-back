const { Router } = require('express');
const rolesController = require('../controller/rolesController');

const router = Router();

router.get('/roles', rolesController.getAll);
router.get('/roles/:id', rolesController.getById);

module.exports = router;