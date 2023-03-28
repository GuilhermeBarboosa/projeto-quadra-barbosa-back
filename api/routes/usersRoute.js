const { Router } = require('express');
const usersController = require('../controller/usersController');

const router = Router();

router.post('/users/login', usersController.getLogin);
router.post('/users/logout', usersController.logout);
router.post('/users/verificartoken', usersController.verifyToken);
router.get('/users', usersController.getAll);
router.post('/users', usersController.create);
router.get('/users/:id', usersController.getById);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

module.exports = router;