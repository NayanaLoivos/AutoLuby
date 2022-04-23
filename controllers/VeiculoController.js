const database = require('../models');

class VeiculoController 
{
    static async pegaTodosOsVeiculos (req, res) {
        try {
            const todosOsVeiculos = await database.Veiculos.findAll();
            return res.status(200).json(todosOsVeiculos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaUmVeiculo (req, res) {
        const { id } = req.params;
        try {
            const umVeiculo = await database.Veiculos.findOne({ where: {id: Number(id)} });
            return res.status(200).json(umVeiculo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaVeiculo (req, res) {
        const novoVeiculo = req.body;
        try {
            const novoVeiculoCriado = await database.Veiculos.create(novoVeiculo);
            return res.status(200).json(novoVeiculoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizaVeiculo (req, res) {
        const { id } = req.params;
        const novasInfosVeiculo = req.body;
        try {
            await database.Veiculos.update(novasInfosVeiculo,  { where: {id: Number(id)} });
            const veiculoAtualiza = await database.Veiculos.findOne({ where: {id: Number(id)} });
            return res.status(200).json(veiculoAtualiza);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async apagaVeiculo (req, res) {
        const { id } = req.params;
        try {
            await database.Veiculos.destroy({ where: {id: Number(id)} });
            return res.status(200).json({ mensagem: `O id ${id} foi apagado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaVendaUmVeiculo ( req, res ) {
        const { veiculoId } = req.params;
        try {
            const vendaUmVeiculo = await database.Vendas.findOne({ 
                where: {                                    
                    veiculo_id: Number(veiculoId)
                },
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
            return res.status(200).json(vendaUmVeiculo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaTodasAsReservasVeiculo ( req, res ) {
        const { veiculoId } = req.params;
        try {
            const todasAsReservasVeiculo = await database.Reservas.findAll({ 
                where: { 
                    vendedor_id: Number(veiculoId)
                },
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
            return res.status(200).json(todasAsReservasVeiculo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}


module.exports = VeiculoController;