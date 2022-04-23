'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Reservas', [
    {
      data: '2022-02-09',
      valor: 130.000,
      vendedor_id: 1,
      veiculo_id: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      data: '2022-02-19',
      valor: 60.000,
      vendedor_id: 2,
      veiculo_id: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      data: '2022-03-19',
      valor: 50.000,
      vendedor_id: 3,
      veiculo_id: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      data: '2022-03-18',
      valor: 70.000,
      vendedor_id: 4,
      veiculo_id: 4,
      createdAt: new Date(),
      updatedAt: new Date() 
    }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Reservas', null, {});
    
  }
};
