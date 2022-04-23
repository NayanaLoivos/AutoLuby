const  { Router } = require('express');

const VendaController = require('../controllers/VendaController');

const router = Router();

router.get('/vendas', VendaController.pegaTodasAsVendas);
router.post('/vendas', VendaController.criaVenda);

module.exports = router;