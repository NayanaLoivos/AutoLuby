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
}

module.exports = FuncionarioController;