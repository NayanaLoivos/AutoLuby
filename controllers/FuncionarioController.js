const database = require('../models');

class FuncionarioController {
    static async pegaTodosOsFuncionarios (req, res) {
        try {
            const todosOsfuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(todosOsfuncionarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async PegaUmFuncionário (req, res) {
        const { id } = req.params;
        try {
           const umFuncionario = await database.Funcionarios.findOne( {
            where: {
                id: Number(id)
            }});    
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
    static async atualizafuncionario (req, res) {
        const { id } = req. params;
        const novasInfosFuncionario = req.body;
        try {
            await database.Funcionarios.update( novasInfosFuncionario, { where: { id: Number(id) } });
            const funcionarioAtualizado = await database.Funcionarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(funcionarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    static async apagaFuncionario (req, res) {        
        const { id } = req.params;
        try {            
            await database.Funcionarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O id ${id} deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        } 
     }  
}

module.exports = FuncionarioController;