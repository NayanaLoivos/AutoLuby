const database = require('../models');

class VendaController {
    static async pegaTodasAsVendas (req, res) {        
        try {
            const todasAsVendas = await database.Vendas.findAll({
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
            return res.status(200).json(todasAsVendas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
      static async criaVenda (req, res) {
        const novaVenda = req.body;
        try {
            const novaVendaCriada = await database.Vendas.create(novaVenda);
            return res.status(200).json(novaVendaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = VendaController;