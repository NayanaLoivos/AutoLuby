'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Funcionarios, {
        foreignKey: 'vendedor_id'        
      })
      this.belongsTo(models.Veiculos, {
        foreignKey: 'veiculo_id'        
      })
    }
  }
  Vendas.init({
    data: DataTypes.DATEONLY,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Vendas',
  });
  return Vendas;
};