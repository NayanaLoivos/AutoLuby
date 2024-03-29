const { Router } = require('express');

const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router.get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios);
router.get('/funcionarios/:id', FuncionarioController.pegaUmFuncionario);
router.post('/funcionarios', FuncionarioController.criaFuncionario);
router.put('/funcionarios/:id', FuncionarioController.atualizaFuncionario);
router.delete('/funcionarios/:id', FuncionarioController.apagaFuncionario);
router.get('/funcionarios/:funcionarioId/Vendas/', FuncionarioController.pegaTodasAsVendasFuncionario);
router.get('/funcionarios/:funcionarioId/Reservas/', FuncionarioController.pegaTodasAsReservasFuncionario);
module.exports = router;
