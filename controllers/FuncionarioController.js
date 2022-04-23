const database = require('../models');

class FuncionarioController 
{
    static async pegaTodosOsFuncionarios ( req, res ) {
        try {
            const todosOsFuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(todosOsFuncionarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaUmFuncionario ( req, res ) {
        const { id } = req.params;
        try {
            const umFuncionario = await database.Funcionarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umFuncionario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criaFuncionario (req, res) {
        const novoFuncionario = req.body;
        try {
            const novoFuncionarioCriado = await database.Funcionarios.create(novoFuncionario);
            return res.status(200).json(novoFuncionarioCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizaFuncionario (req, res) {
        const { id } = req.params;
        const novasInfosFuncionario = req.body;
        try {
            await database.Funcionarios.update(novasInfosFuncionario, { where: { id: Number(id) } });
            const funcionarioAtualiza = await database.Funcionarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(funcionarioAtualiza);
        } catch (error) {
            return res.status(500).json(error.message);           
        }
    }
    static async apagaFuncionario (req, res) {
        const { id } = req.params;
        try {
            await database.Funcionarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O id ${id} foi apagado!` });
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }    
    static async pegaTodasAsVendasFuncionario ( req, res ) {
        const { funcionarioId } = req.params;
        try {
            const todasAsVendasFuncionario = await database.Vendas.findAll({ 
                where: {                                    
                    vendedor_id: Number(funcionarioId)            
                },
                //This is a Join
                include:[
                    {
                        model: database.Funcionarios,
                        required: true
                    },
                    {
                        model: database.Veiculos,
                        require: true
                    }
                ]
            });
            return res.status(200).json(todasAsVendasFuncionario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaTodasAsReservasFuncionario ( req, res ) {
        const { funcionarioId } = req.params;
        try {
            const todasAsReservasFuncionario = await database.Reservas.findAll({ 
                where: { 
                    vendedor_id: Number(funcionarioId)
                },
                include:[
                    {
                        model: database.Funcionarios,
                        required: true
                    },
                    {
                        model: database.Veiculos,
                        required: true
                    }                ]
            });
            return res.status(200).json(todasAsReservasFuncionario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = FuncionarioController;
