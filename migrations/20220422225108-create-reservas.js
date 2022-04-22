'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      valor: {
        type: Sequelize.FLOAT
      },
      vendedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Funcionarios', key: 'id'}
      },
      veiculo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Veiculos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};