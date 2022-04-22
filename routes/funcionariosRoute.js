const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router.get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios);
router.get('/funcionarios/:id', FuncionarioController.PegaUmFuncionário);
router.post('/funcionarios', FuncionarioController.criaFuncionario);
router.put('/funcionarios/:id', FuncionarioController.atualizafuncionario);
router.delete('/funcionarios/:id', FuncionarioController.apagaFuncionario);

module.exports = router;