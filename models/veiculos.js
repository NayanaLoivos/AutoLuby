'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Vendas, {
        foreignKey: 'veiculo_id'        
      })
      this.hasMany(models.Reservas, {
        foreignKey: 'veiculo_id'        
      })
    }
  }
  Veiculos.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    km: DataTypes.INTEGER,
    cor: DataTypes.STRING,
    chassi: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};