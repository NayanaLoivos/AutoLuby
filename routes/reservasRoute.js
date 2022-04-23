const  { Router } = require('express');

const ReservaController = require('../controllers/ReservaController');

const router = Router();

router.get('/reservas', ReservaController.pegaTodasAsReservas);
router.post('/reservas', ReservaController.criaReserva);

module.exports = router;