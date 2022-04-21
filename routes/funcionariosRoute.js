const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router.get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios);

module.exports = router;