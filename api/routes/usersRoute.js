const { Router } = require('express');
const usersController = require('../controller/usersController');

const router = Router();
const uri = '/users';

router.post(`${uri}/login`, usersController.getLogin);
router.post(`${uri}/logout`, usersController.logout);
router.post(`${uri}/verificartoken`, usersController.verifyToken);
router.get(`${uri}`, usersController.getAll);
router.post(`${uri}`, usersController.create);
router.get(`${uri}/:id`, usersController.getById);
router.put(`${uri}/:id`, usersController.update);
router.delete(`${uri}/:id`, usersController.delete);

module.exports = router;