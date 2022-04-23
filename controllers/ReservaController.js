const database = require('../models');

class ReservaController {
    static async pegaTodasAsReservas (req, res) {        
        try {
            const todasAsReservas = await database.Vendas.findAll({
                include:[
                    {
                        model: database.Veiculos,
                        required: true
                    },
                    {
                        model:database.Funcionarios,
                        required: true
                    }
                ]
            });
            return res.status(200).json(todasAsReservas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
      static async criaReserva (req, res) {
        const novaReserva = req.body;
        try {
            const novaReservaCriada = await database.Vendas.create(novaReserva);
            return res.status(200).json(novaReservaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ReservaController;
