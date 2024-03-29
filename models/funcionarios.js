'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Vendas, {
        foreignKey: 'vendedor_id'
      })
      this.hasMany(models.Reservas, {
        foreignKey: 'vendedor_id'
      })          
    }
  }
  Funcionarios.init({
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    biografia: DataTypes.TEXT,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};