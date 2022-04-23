const  { Router } = require('express');

const VeiculoController = require('../controllers/VeiculoController');

const router = Router();

router.get('/veiculos', VeiculoController.pegaTodosOsVeiculos);
router.get('/veiculos/:id', VeiculoController.pegaUmVeiculo);
router.post('/veiculos', VeiculoController.criaVeiculo);
router.put('/veiculos/:id', VeiculoController.atualizaVeiculo);
router.delete('/veiculos/:id', VeiculoController.apagaVeiculo);

module.exports = router;